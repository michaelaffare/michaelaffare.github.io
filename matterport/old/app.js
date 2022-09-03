"use strict;";
const key = "7igrgstd5g0gs3dbgpqm1zwxc";
//const key = "yq7bnsc3tw1t3c1rd70t240kc";

const params = "&help=0&play=1&qs=0&gt=0&hr=0";
const matSpace = "https://my.matterport.com/show/?m=";
let matSid = "YH7wuu6T1pL";

let iframe;
let addTagBtn;
let container;
let tag;
let table_container;
const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;

// These tags are fixed, and added through the UI

const elements = [
  {
    sid: "ah9jv5dEjTq",
    label: "Orientation",
    description:
      "Houses with a north facing orientation, can help bring in cooling breezes in summer and allow the sun to warm your home in winter. ",
  },
  {
    sid: "ah9jv5dEjTq",
    label: "Insulation",
    text: "Having a well-insulated home is perhaps one of the most important design features to make your home more comfortable and climate resilient. ",
  },
  {
    sid: "Cm4tETEWCfX",
    label: "Construction System",
    text: "A combination of low and high mass construction, provides the best overall economic and environmental outcomes when combined with passive solar design.",
  },
  {
    sid: "Cq6686Vy1mb",
    label: "Household Appliances",
    text: "Household appliances and equipment account for about 33% of energy consumption and about 45% of greenhouse gas emissions in the average household.",
  },
  {
    sid: "EjiLasQAknJ",
    label: "Water Usage",
    text: "Use water efficient devices on showers, toilets, taps and appliances to reduce overall water consumption.",
  },
  {
    sid: "HdrrkZ69Agx",
    label: "Ventilation",
    text: "Basically, energy leaks out in winter and leaks in during summer. By correctly addressing ventilation, building sealing and zoning you can have a home that is more comfortable all year round!",
  },
  {
    sid: "nBNUJ8sgYTJ",
    label: "Thermal Mass",
    text: "Thermal mass refers to the ability of a material to absorb and store heat energy.  Materials with high thermal mass need to be placed appropriately, such as in the northern half of the house where it will absorb passive solar heat during winter but can be easily shaded during summer.   ",
  },
  {
    sid: "NO0PytsqLuT",
    label: "Embodied Energy",
    text: "The energy used to collect and refine raw materials and manufacture products is referred to as embodied energy and is one of the environmental factors often overlooked when designing and building a new house or renovating. ",
  },
  {
    sid: "OQYRedTmCOw",
    label: "Zoning",
    text: "Being able to ‘zone-off’ an area gives control you over which areas your heating or cooling of the home. ",
  },
  {
    sid: "qdkøleDGclj",
    label: "Renewable Energy",
    text: "Choosing to invest in renewable energy is an excellent way to reduce  greenhouse gas emissions that result from production of electricity. ",
  },
  {
    sid: "Tt01Wiv1OZ9",
    label: "Shading",
    text: "Effective shading can be achieved by eaves, covered pergolas (vines, shade cloth or blinds) or vertical screens (shutters or blinds), and by trees, particularly on the north and western sides of your house.",
  },
  {
    sid: "ubSpk2Ejqfq",
    label: "Building Materials",
    text: "Selection of materials and the way they are combined can yield significant improvements in the comfort and cost effectiveness of your home, and greatly reduce its life cycle environmental impact. ",
  },
  {
    sid: "mIGzra09MB1",
    label: "Sealing",
    text: "In winter it is particularly important to address sealing around doors and windows to stop drafts, and reduce winter heating costs.  ",
  },
];

elements.forEach(myfunction);

function myfunction(element) {
  console.log(element.sid);
}

// intro transition
// clean funtions not in use

document.addEventListener("DOMContentLoaded", () => {
  iframe = document.querySelector(".showcase");
  container = document.querySelector(".showcase_container");
  addTagBtn = document.querySelector(".add_tag");
  importBtn = document.querySelector(".import_tags");
  exportBtn = document.querySelector(".export_tags");
  removeBtn = document.querySelector(".remove_tags");
  sidSelector = document.getElementById("sid-input");
  toOrientation = document.getElementById("toOrientation");
  navigateButton = document.querySelector(".navigate");
  table_container = document.querySelector(".scrollable");
  table_container_button = document.querySelector(".buttons");
  iframe.setAttribute("src", `${matSpace}${matSid}${params}`);
  iframe.addEventListener("load", showcaseLoader, true);

  sidSelector.setAttribute("value", matSid);

  sidSelector.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      matSid = sidSelector.value;
      iframe.setAttribute("src", `${matSpace}${matSid}${params}`);
    }
  });
});

function showcaseLoader() {
  try {
    window.MP_SDK.connect(iframe, key, "3.2")
      .then(loadedShowcaseHandler)
      .catch(console.error);
  } catch (e) {
    console.error(e);
  }
}

function addToTable(tag) {
  let elem;
  let row;
  if (
    table_container &&
    table_container.children[0] &&
    table_container.children[0].tagName == "THEAD"
  ) {
    table_container = table_container.append(document.createElement("TBODY"));
  }

  table_container.appendChild((row = document.createElement("tr")));
  row.setAttribute("id", `${tag.sid}`);

  // Label
  row.appendChild((elem = document.createElement("td")));
  elem.setAttribute("id", "label");
  elem.innerText = `${tag.label}`;

  // Description
  row.appendChild((elem = document.createElement("td")));
  elem.setAttribute("id", "description");
  elem.innerText = `${tag.description}`;

  // Goto link
  row.appendChild((elem = document.createElement("td")));
  elem.setAttribute("id", "goto");
  elem.appendChild(document.createElement("div"));

  return row;
}

function loadedShowcaseHandler(mpSdk) {
  let addingTag = false;
  let movingTag = false;
  // Fetch tags
  mpSdk.Mattertag.getData()
    .then((tags) => {
      mattertags = tags;
      populateTags(elements);
      setupTagFunctionality();
    })
    .catch(console.error);

  function populateTags(tags) {
    tags.forEach(addButton);
  }

  function addButton(tag) {
    table_container_button.append((button = document.createElement("button")));
    button.setAttribute("id", `${tag.sid}`);
    button.innerText = `${tag.label}`;
    button.addEventListener('click',addTagListeners(button));
  }

  function placeTag() {
    if (tag) mpSdk.Mattertag.navigateToTag(tag, mpSdk.Mattertag.Transition.FLY);
    tag = null;
    movingTag = false;
  }

  if (!isFirefox) {
    focusDetect();
  }

  function focusDetect() {
    const eventListener = window.addEventListener("blur", function () {
      if (document.activeElement === iframe) {
        placeTag(); //function you want to call on click
        setTimeout(function () {
          window.focus();
        }, 0);
      }
      window.removeEventListener("blur", eventListener);
    });
  }

  function overlayDetect() {
    if (tag) {
      const overlay = document.createElement("div");
      overlay.setAttribute("class", "click-overlay");
      overlay.addEventListener("mousemove", (e) => {
        mpSdk.Renderer.getWorldPositionData({
          x: e.clientX - 30,
          y: e.clientY - 5,
        })
          .then((data) => {
            updateTagPos(data.position);
          })
          .catch((e) => {
            console.error(e);
            placeTag();
          });
      });
      overlay.addEventListener("click", (e) => {
        placeTag();
        overlay.remove();
      });
      container.insertAdjacentElement("beforeend", overlay);
    }
  }

  function updateTagPos(newPos, newNorm = undefined, scale = undefined) {
    if (!newPos) return;
    if (!scale) scale = 0.33;
    if (!newNorm) newNorm = { x: 0, y: 1, z: 0 };

    mpSdk.Mattertag.editPosition(tag, {
      anchorPosition: newPos,
      stemVector: {
        x: scale * newNorm.x,
        y: scale * newNorm.y,
        z: scale * newNorm.z,
      },
    }).catch((e) => {
      console.error(e);
      tag = null;
      movingTag = false;
    });
  }

  mpSdk.Pointer.intersection.subscribe((intersectionData) => {
    if (tag && !movingTag) {
      if (
        intersectionData.object === "intersectedobject.model" ||
        intersectionData.object === "intersectedobject.sweep"
      ) {
        updateTagPos(intersectionData.position, intersectionData.normal);
      }
    }
  });

  // addTagBtn.addEventListener('click', () => {
  //     if(!addingTag && !tag){
  //         addingTag = true;
  //         mpSdk.Mattertag.add([{
  //             label: "Matterport Tag",
  //             description: "",
  //             anchorPosition: {x: 0, y: 0, z: 0},
  //             stemVector: {x:0, y: 0, z: 0},
  //             color: {r: 1, g: 0, b: 0},
  //         }])
  //         .then((sid) => {
  //             tag = sid[0];
  //             return mpSdk.Mattertag.getData();
  //         })
  //         .then( (collection) => {
  //             const t_sid = collection.find( elem => elem.sid === tag);
  //             const row = addToTable(t_sid);
  //             addTagListeners(row);
  //             addingTag = false;
  //         })
  //         .then(() => {
  //             if(isFirefox) overlayDetect();
  //         })
  //         .catch( (e) => {
  //             console.error(e);
  //             addingTag = false;
  //         })
  //     }
  // });

  function replaceShowcaseTags(tags) {
    return mpSdk.Mattertag.getData()
      .then((oldTags) => {
        oldTagSids = oldTags.map((oldTag) => oldTag.sid);
        return mpSdk.Mattertag.remove(oldTagSids);
      })
      .then(() => {
        tags.forEach((tag) => {
          tag.media.type = "mattertag.media." + tag.media.type;
        });
        return mpSdk.Mattertag.add(tags);
      })
      .then((newSids) => {
        tags.forEach((tag, i) => (tag.sid = newSids[i]));
        return tags;
      })
      .catch((e) => {
        console.error(`${e}: ${tags}`);
      });
  }

  // importBtn.addEventListener('click', () => {
  //     const input = document.createElement('input');
  //     input.type = 'file';
  //     let file;
  //     input.onchange = e => {
  //         file = e.target.files[0];
  //         importFile(file);
  //     }
  //     setTimeout( () => {input.click();}, 100);
  // });

  // removeBtn.addEventListener('click', () => {
  //     removeAllTags();
  // })

  function importFile(file) {
    if (file.type === "application/json") {
      const reader = new FileReader();
      reader.readAsText(file);

      reader.addEventListener("load", (e) => {
        const content = e.target.result;
        tags = JSON.parse(content);
        replaceShowcaseTags(tags)
          .then((newTags) => {
            //populateTags(newTags);
            //setupTagFunctionality();
          })
          .catch(console.error);
      });
    } else {
      window.alert("Please select a .json filetype");
    }
  }

  // from https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
  // Function to download data to a file
  function download(data, filename, type) {
    const file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      const a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  function removeAllTags() {
    mpSdk.Mattertag.getData()
      .then((tags) => {
        return tags.map((tag) => tag.sid);
      })
      .then((tagSids) => {
        return mpSdk.Mattertag.remove(tagSids);
      })
      .catch(console.error);

    document.querySelectorAll("tr").forEach((block) => {
      if (!block || block.tagName == "TH") return;
      block.parentNode.removeChild(block);
    });
  }

  function exportTags(tags) {
    if (!tags || tags.length == 0) {
      return;
    } // TODO: Let the user know there are no tags
    const filename = "tags.json";
    const tagsText = JSON.stringify(tags);
    download(tagsText, filename, "application/json");
  }

  function updateTag(matTagId, label = null, description = null) {
    if (!label && !description) return;

    const props = new Object();
    label ? (props["label"] = label) : {};
    description ? (props["description"] = description) : {};

    mpSdk.Mattertag.editBillboard(matTagId, props).catch((e) => {
      console.error(e);
    });
  }

  function changeInfo(ele, tagId) {
    if (ele.tagName === "TH") {
      return;
    }
    const desc = ele.innerText;
    const change = document.createElement("input");
    change.id = tagId;
    change.value = desc;
    ele.replaceWith(change);
    change.focus();
    change.addEventListener("blur", (e) => {
      clickAway(change, tagId);
    });
    change.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        change.blur();
      }
    });
  }

  function clickAway(ele, tagId) {
    let desc = ele.value;
    const change = document.createElement("td");
    change.id = tagId;
    change.innerText = ele.value;
    ele.replaceWith(change);
    change.removeEventListener("blur", clickAway);
    const lbl = tagId === "label" ? desc : null;
    desc = tagId === "description" ? desc : null;
    updateTag(change.parentElement.id, (label = lbl), (description = desc));
    change.addEventListener("click", () => {
      changeInfo(change, tagId);
    });
  }

  function addTagListeners(block) {
    //log something
    block.addEventListener("click", () => {
      console.log("clicked listener");
      mpSdk.Mattertag.navigateToTag(
        block.id,
        mpSdk.Mattertag.Transition.FADEOUT
      ).catch((e) => {
        console.error(e);
      });
    });

  }
  
  function setupTagFunctionality() {
    document.querySelectorAll("tr").forEach(addTagListeners);
  }
} // loadedShowcaseHandler
