"use strict;";

const key = "7igrgstd5g0gs3dbgpqm1zwxc";
const params = "&help=0&play=1&qs=0&gt=0&hr=0";
const matSpace = "https://my.matterport.com/show/?m=";
let matSid = "YH7wuu6T1pL";

let iframe;
let addTagBtn;
let container;
let tag;
let table_container;
const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;

const elements = [
  {
    sid: "gMaLy6Ref1Q",
    label: "Orientation",
    text:
      `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>The orientation of your house can have a significant impact on the comfort of your home, and therefore is an important climate change and sustainability consideration.</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>&nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>Orientation is easily overlooked when purchasing a block of land for development or building a new dwelling. &nbsp;Ideally homes in Adelaide should be orientated to have living spaces facing north. &nbsp;Houses with a north facing orientation, can help bring in cooling breezes in summer and allow the sun to warm your home in winter.&nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>&nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>Passive design principles are key to maximising the sun&rsquo;s warmth into your home in winter and cool breezes in summer. &nbsp; Passive design refers to utilising natural sources of heating and cooling, such as the sun, shade and cooling breezes. It is achieved by orientating your building on its site to face north, and carefully designing the building envelope. The building envelope is all of the elements of the outer shell that maintain a dry, heated, or cooled indoor environment and facilitate its climate control. &nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>&nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>To learn more about Passive Design see:&nbsp;</span><a href="https://www.yourhome.gov.au/passive-design"><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/passive-design</span></a><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>&nbsp;</span></p>
      <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;'>Ideally living areas should be located to the north, bedrooms to the east, utility areas to the south and carports etc to the west. This orientation can provide passive cooling in summer with shading and breezes, particularly on the western side of the house. It also allows winter sun into the house to help maintain a comfortable temperature of your home all year, with little or no need for mechanical assistance (heaters, fans, air conditioners etc). This saves money, and reduces greenhouse gas emissions and your carbon footprint.&nbsp;</span></p>`,
  },
  {
    sid: "dP7snk1HAv4",
    label: "Window glazing",
    text: 
    `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Windows are an important element in designing for passive heating and cooling, and of course, in creating an attractive outlook. Position your windows so they are well placed for light, warmth, and views. The right amount and type of glass used, will result in cost savings by reducing heating and cooling energy costs.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Windows need to be as big as they can be on the north face to allow maximum free solar heating, without producing uncontrolled heat loss or gain. A rule of thumb is to occupy 70% of the North face with well insulating windows. The windows can be smaller on the other sides of the house. Windows that insulate well and do not reflect the sun&apos;s rays maximise heat gain and minimise heat loss in winter.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To help keep your home cool in summer and warm in winter attention should be given to the type of glazing used. &nbsp;Double and triple glazing and some laminated glass for example acts like insulation, in reducing the rate at which heat moves through the glazing system. This reduces the rate of energy gained or lost through the windows. &nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:36.0pt;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To learn more about windows and glazing systems including why some systems are better than others, visit the Your Home Manual pages on glass and glazing where there is a wealth of information&nbsp;</span><a href="https://www.yourhome.gov.au/passive-design/glazing"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/passive-design/glazing</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Attention still needs to be given to supplementary shading devices and vegetation such as deciduous trees and vines around the home as direct heat on glass is not always mitigated by these glass types. Other glass types act to reflect radiation, but similarly do not remove the need for shading.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Pay attention to window furnishings such as blinds, louvres and curtains (to complement the range of glazing options) as they can be effective to keep the hot sun out during summer and to trap heat in the colder months.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Key Considerations:</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;color:black;'>&nbsp;</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Glazing of north facing windows and doors allows maximum solar access in winter, which can then be easily shaded in summer.</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>On east and west facing facades for views and valuable cross ventilation, an ideal solution is to use smaller windows, with insulating glass to reduce unwanted heat loss and gain. Summer radiated heat gain can then be controlled with adjustable external shading.</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Use well insulated windows on south facades for sunlight, cross ventilation or views.</span></li>
    </ul>`,
  },
  {
    sid: "TtO1Wiv1OZ9",
    label: "Shading",
    text: 
   `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Shading of your home can have a significant impact on creating a comfortable, sustainable home, and in reducing your energy costs.</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Shading of glass is a key consideration in cooling your home naturally. Unprotected glass is the single greatest source of heat gain in a well-insulated home. Outdoor living areas adjacent north facing windows and openings also need to be shaded during summer.</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Effective shading can be achieved by eaves, covered pergolas (vines, shade cloth or blinds) or vertical screens (shutters or blinds), and by trees, particularly on the north and western sides of your house.</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To understand more about shading and including sun angles and suggested shading types for different fa&ccedil;ade orientations see this section in the Your Home Technical Manual&nbsp;</span><a href="https://www.yourhome.gov.au/passive-design/shading"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/passive-design/shading</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Shading works with climate specific design &ndash; for example, appropriate shading for Darwin won&rsquo;t work with a home designed for a Hobart climate.&nbsp;</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Further information on designing for climate can be found here:&nbsp;</span><a href="https://www.yourhome.gov.au/passive-design/design-climate"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/passive-design/design-climate</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In Western Adelaide we need to enhance and protect our tree cover. If you have the opportunity to plant more trees around your home, they can provide multiple benefits. Trees not only provide effective shading to reduce air temperatures, they can improve air quality, add visual appeal, increase biodiversity habitat, and can also increase the value of your house! Smaller plants, shrubs and lawns also offer natural cooling, particularly when well-watered days prior to an upcoming heat.&nbsp;</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><em><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Summer Sun Protection</span></em><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;<br>&nbsp;</span></strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Effective shading using the techniques described above will help prevent living spaces from becoming uncomfortably hot. Your home will be naturally cooler with protective shading and cross-ventilated air movement from breezes at night.&nbsp;</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><em><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>North Shading</span></em><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;<br>&nbsp;</span></strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The sun moves higher across the sky in summer which creates opportunities for effective shading of northern facing windows using a mix of window treatments (such as eaves, blinds and shutters), and greenery (vines, trees, etc).&nbsp;</span></p>
   <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><em><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>East &amp; West Shading</span></em><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;<br>&nbsp;</span></strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Windows facing east or west get a lot of horizontal sunlight in summer and require extensive shading from hot summer sun radiation. To achieve energy efficiency your house needs full external shading to all windows from October or earlier to March and possibly beyond. &nbsp;Vertical shading devices are needed to block western afternoon sun in summer. Lighter coloured shading devices reflect more heat than darker coloured treatments. Internal shading is relatively ineffective in preventing heat gain. &nbsp;Adjustable shade structures also allow you to let in sun during winter when more warmth is needed.</span></p>`,
  },
  {
    sid: "HdrrkZ69Agx",
    label: "Ventilation",
    text: 
    `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Being able to control the airtightness of your home by choosing when to ventilate and when to not, is a key and often overlook measure of energy efficiency. By international standards, Australian homes are comparatively &ldquo;leaky&rdquo; &ndash; meaning that they exhibit unwanted energy transfer across the building envelope. Basically, energy leaks out in winter and leaks in during summer. By correctly addressing ventilation, building sealing and zoning you can have a home that is more comfortable all year round!</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In the summer months, cooling your home through natural ventilation is a sustainable and healthy option. When designing your home locate windows, doors and ventilation shutters to encourage cross flow ventilation in your home and to catch natural breezes.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To remove heat and encourage air movement open high level windows, ceiling and roof space vents. In winter close them to prevent warm air from escaping.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In winter it is particularly important to address sealing around doors and windows to stop drafts, and reduce winter heating costs. &nbsp; Windows need to be properly sealed into the walls of the house, closing off air gaps and unwanted ventilation around the edge of the frame, which allows <em>you</em> to control when you ventilate.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For adequate cross ventilation locate windows, doors and ventilation shutters at each side of your home with clear paths between.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To encourage good air movement, make sure your floor plan is zoned to maximise comfort for daytime activities and sleeping comfort.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>If you are building a two-story home, zoning is even more important. Being able to &lsquo;zone-off&rsquo; an area gives control you over which areas your heating or cooling of the home. This is particularly useful in a two story home where the energy for heating your living areas will escape up your stairs. Exhaust venting at the head of your stairs will help to remove excess heat in summer, as upstairs will gain heat from below, as well as from the sun.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>Key Considerations:</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>&nbsp;</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>For heat ventilation install closable vents in the ceiling, for venting through the roof (roof vents) or high level open-able windows. Consideration should also be given to Self-closing dampers, as well as closing off evaporative air con vents in winter</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Seal all openings (windows &amp; doors) to prevent air movement (draughts and air leaks) in winter. &nbsp;&nbsp;</span><span style="color:black;">Install weather stripping / window and door seals to prevent unwanted air movement.</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Divide your home into zones of different temperature needs for comfort e.g. bedrooms separated from living areas. Also enable closing off living areas from other unoccupied rooms, making heating and cooling more efficient.</span></li>
    </ul>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The Your Home Technical Manual has some excellent guidance on ventilation issues including dealing with condensation, mould and carbon dioxide build-up &ndash; learn more here: https://www.yourhome.gov.au/passive-design/ventilation-airtightness</span></p>`,
  },
  {
    sid: "8UqiR62lx2p",
    label: "Sealing",
    text: 
    `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Being able to control the airtightness of your home by choosing when to ventilate and when to not, is a key and often overlook measure of energy efficiency. By international standards, Australian homes are comparatively &ldquo;leaky&rdquo; &ndash; meaning that they exhibit unwanted energy transfer across the building envelope. Basically, energy leaks out in winter and leaks in during summer. By correctly addressing ventilation, building sealing and zoning you can have a home that is more comfortable all year round!</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In the summer months, cooling your home through natural ventilation is a sustainable and healthy option. When designing your home locate windows, doors and ventilation shutters to encourage cross flow ventilation in your home and to catch natural breezes.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To remove heat and encourage air movement open high level windows, ceiling and roof space vents. In winter close them to prevent warm air from escaping.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In winter it is particularly important to address sealing around doors and windows to stop drafts, and reduce winter heating costs. &nbsp; Windows need to be properly sealed into the walls of the house, closing off air gaps and unwanted ventilation around the edge of the frame, which allows <em>you</em> to control when you ventilate.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For adequate cross ventilation locate windows, doors and ventilation shutters at each side of your home with clear paths between.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To encourage good air movement, make sure your floor plan is zoned to maximise comfort for daytime activities and sleeping comfort.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>If you are building a two-story home, zoning is even more important. Being able to &lsquo;zone-off&rsquo; an area gives control you over which areas your heating or cooling of the home. This is particularly useful in a two story home where the energy for heating your living areas will escape up your stairs. Exhaust venting at the head of your stairs will help to remove excess heat in summer, as upstairs will gain heat from below, as well as from the sun.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>Key Considerations:</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>&nbsp;</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>For heat ventilation install closable vents in the ceiling, for venting through the roof (roof vents) or high level open-able windows. Consideration should also be given to Self-closing dampers, as well as closing off evaporative air con vents in winter</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Seal all openings (windows &amp; doors) to prevent air movement (draughts and air leaks) in winter. &nbsp;&nbsp;</span><span style="color:black;">Install weather stripping / window and door seals to prevent unwanted air movement.</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Divide your home into zones of different temperature needs for comfort e.g. bedrooms separated from living areas. Also enable closing off living areas from other unoccupied rooms, making heating and cooling more efficient.</span></li>
    </ul>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The Your Home Technical Manual has some excellent guidance on ventilation issues including dealing with condensation, mould and carbon dioxide build-up &ndash; learn more here: https://www.yourhome.gov.au/passive-design/ventilation-airtightness</span></p>`,
  },
  {
    sid: "OQYRedTmCOw",
    label: "Zoning",
    text: 
    `<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Being able to control the airtightness of your home by choosing when to ventilate and when to not, is a key and often overlook measure of energy efficiency. By international standards, Australian homes are comparatively &ldquo;leaky&rdquo; &ndash; meaning that they exhibit unwanted energy transfer across the building envelope. Basically, energy leaks out in winter and leaks in during summer. By correctly addressing ventilation, building sealing and zoning you can have a home that is more comfortable all year round!</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In the summer months, cooling your home through natural ventilation is a sustainable and healthy option. When designing your home locate windows, doors and ventilation shutters to encourage cross flow ventilation in your home and to catch natural breezes.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To remove heat and encourage air movement open high level windows, ceiling and roof space vents. In winter close them to prevent warm air from escaping.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In winter it is particularly important to address sealing around doors and windows to stop drafts, and reduce winter heating costs. &nbsp; Windows need to be properly sealed into the walls of the house, closing off air gaps and unwanted ventilation around the edge of the frame, which allows <em>you</em> to control when you ventilate.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For adequate cross ventilation locate windows, doors and ventilation shutters at each side of your home with clear paths between.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To encourage good air movement, make sure your floor plan is zoned to maximise comfort for daytime activities and sleeping comfort.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>If you are building a two-story home, zoning is even more important. Being able to &lsquo;zone-off&rsquo; an area gives control you over which areas your heating or cooling of the home. This is particularly useful in a two story home where the energy for heating your living areas will escape up your stairs. Exhaust venting at the head of your stairs will help to remove excess heat in summer, as upstairs will gain heat from below, as well as from the sun.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>Key Considerations:</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>&nbsp;</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>For heat ventilation install closable vents in the ceiling, for venting through the roof (roof vents) or high level open-able windows. Consideration should also be given to Self-closing dampers, as well as closing off evaporative air con vents in winter</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Seal all openings (windows &amp; doors) to prevent air movement (draughts and air leaks) in winter. &nbsp;&nbsp;</span><span style="color:black;">Install weather stripping / window and door seals to prevent unwanted air movement.</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Divide your home into zones of different temperature needs for comfort e.g. bedrooms separated from living areas. Also enable closing off living areas from other unoccupied rooms, making heating and cooling more efficient.</span></li>
    </ul>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The Your Home Technical Manual has some excellent guidance on ventilation issues including dealing with condensation, mould and carbon dioxide build-up &ndash; learn more here: https://www.yourhome.gov.au/passive-design/ventilation-airtightness</span></p>`,
  },
  {
    sid: "ah9jv5dEjTq",
    label: "Insulation",
    text: 
    `
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Having a well-insulated home is perhaps one of the most important design features to make your home more comfortable and climate resilient. I<span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>nsulation helps to prevent heat flowing into or out of the building. Choosing the right insulation for walls, ceiling and/or roof space and in some cases under the floor will reduce uncomfortable indoor temperature fluctuations. Unwanted heat gain or heat loss can occur without the right type and amount of insulation.&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Insulation works in conjunction with the other key elements of passive design. For example, if bulk insulation is installed but the house is not properly shaded, unwanted heat can build up and be kept in by the insulation creating an &lsquo;oven&rsquo; effect. However, a well-designed and well insulated home will provide near year-round comfort, reducing your cooling and heating bills.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;font-family:"Arial",sans-serif;'>Insulation products come in two main categories (though there are others)- bulk and reflective. These are sometimes combined into a composite material. Pay attention to the R-value of insulation (for example R4.0 ceiling batts) as this is the measure of <em>resistance</em> to heat flow: the higher the R-value the higher the level of insulation. Keep in mind that some batts add additional weight to the ceiling, hence the plaster board needs to be capable of carrying the weight of the installed product. &nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'><br> <em>Bulk insulation</em> works like a quilt in that it relies on pockets of trapped air within its structure. Bulk insulation should be used in roof spaces and in wall cavities to trap heat in or prevent it from getting into the home. &nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><em><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Reflective insulation</span></em><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;should be located at the external surface of walls and roofs to maximise its capacity to prevent unwanted energy movement.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><em><span style='font-size:13px;font-family:"Source Sans Pro",sans-serif;color:black;'>Cool roofs</span></em><span style='font-size:14px;font-family:"Arial",sans-serif;'>&nbsp;refer to installing or painting the roof with a heat reflective material. They are effective in keeping your house cool during summer as they reflect solar radiation and absorb less heat than a standard roof. &nbsp; Cool roofs can be created with highly reflective paint, a sheet covering, or highly reflective tiles or shingles. &nbsp;Alternatively painting your roof with light colours or white paint is also effective.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For further technical information about insulation visit&nbsp;</span><a href="https://www.yourhome.gov.au/passive-design/insulation"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/passive-design/insulation</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>`,
  },
  {
    sid: "nBNUJ8sgYTJ",
    label: "Thermal Mass",
    text: 
    `
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Thermal mass refers to the ability of a material to absorb and store heat energy. Materials such as a concrete slabs, bricks and other masonry, rammed earth walls or mud bricks have the ability to absorb and store heat and are said to have high thermal mass. &nbsp;Heat is absorbed from the sun&apos;s radiation, warm air and any other sources of heat.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Materials with high thermal mass need to be placed appropriately, such as in the northern half of the house where it will absorb passive solar heat during winter but can be easily shaded during summer. &nbsp; When placed correctly thermal mass can help to maintain a stable internal temperature all year round.&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>In the Adelaide climate zone (warm temperate), to be effective thermal mass must be integrated with passive design techniques, including the right amount of glazing facing, with appropriate levels of shading and insulation. &nbsp;The predominant requirement for cooling in this climate is mixed mass construction. High mass construction is also appropriate but requires a sound passive design to avoid overheating in summer.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>During summer thermal mass acts to absorb heat during the day and releases it by night through adequate cross ventilation and cooling breezes, which can lead to a cooler home without having the resort to air-conditioning. In winter, when the nighttime ventilation is closed off, the same thermal mass can store the heat from the daylight hours to release it at night, helping the home stay warmer.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Key Considerations:</span></p>
<ul style="list-style-type: undefined;margin-left:29px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Thermal mass and insulation work together to maintain a stable indoor temperature.</span></li>
</ul>
<ul style="list-style-type: undefined;margin-left:28.85px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Thermal mass is not a substitute for insulation. Thermal mass stores and re-radiates heat. Insulation stops heat from flowing into or out of the building. A high thermal mass material is generally not a good thermal insulator.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Thermal mass can act as a &lsquo;thermal battery&rsquo;. It absorbs and stores heat energy.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>In winter, all window, door and vent openings should be closed and well-sealed from draughts so that heat in the home is not lost.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Draught sealing is important, as draughts can account for up to 25 percent of heat loss from a home in winter.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Thermal mass is particularly beneficial where there is a big difference between day and night outdoor temperatures.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Floating timber boards have become a popular flooring option in contemporary housing. &nbsp;However, this flooring type on a concrete slab significantly diminishes the effectiveness of the thermal mass qualities of the floor.</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>In areas of the home where the sun directly hits, tiles are a better option to utilise the thermal mass of the slab.</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></strong></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Locating high mass materials</span></strong></p>
<ul style="list-style-type: undefined;margin-left:26px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Good solar access is required in winter to heat the thermal mass.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Thermal mass should be located mostly in the northern half of the house where it will absorb the most passive solar heat during winter and can be easily shaded in summer.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Use thermal mass dividing walls between north-facing living rooms and south-facing bedrooms. Thermal lag may distribute some of the heat to bedrooms, while retention of heat will serve all rooms in summer.&nbsp;</span></li>
</ul>
<p><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Further information about the thermal mass can be found at&nbsp;</span><span style='font-size:15px;line-height:107%;font-family:"Calibri",sans-serif;'><a href="https://www.yourhome.gov.au/passive-design/thermal-mass"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/passive-design/thermal-mass</span></a></span><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>    
    
    `,
  },

  {
    sid: "NO0PytsqLuT",
    label: "Embodied Energy",
    text: 
    `
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The energy used to collect and refine raw materials and manufacture products is referred to as embodied energy and is one of the environmental factors often overlooked when designing and building a new house or renovating. Embodied energy includes the extraction and processing of raw materials, along with manufacturing, transport and product delivery processes. &nbsp;While energy is required to make all building materials, some require less energy than others to produce.&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The single most important factor in reducing the impact of embodied energy is to design long-life, durable and adaptable buildings.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Use materials with low embodied energy by selecting:&nbsp;</span></p>
<ul style="list-style-type: undefined;margin-left:28.85px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Building materials are made and sold locally.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Locally sourced plantation timbers rather than exotic timber &nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Materials are high in recycled content whenever possible.</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>However, some higher embodied energy materials work better for energy efficiency than their low energy counterparts, by reducing long-term energy demands. &nbsp;Cement, glass, plastics, steel and aluminium are all high in embodied energy, but their use can reduce energy demands over the life of a home. Making decisions about using high embodied energy materials instead of their lower energy counterparts should occur only when you know their use contributes to greater energy savings. Ask your supplier/builder for evidence.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For further information on embodied energy visit&nbsp;</span><a href="https://www.yourhome.gov.au/materials/embodied-energy"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/materials/embodied-energy</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Key Considerations:</span></p>
<div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ol style="margin-bottom: 0cm; margin-left: 26px;">
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;color:black;font-size:14px;color:black;'>Windows and doors could be timber rather than aluminium. Aluminium window frames can reduce maintenance, but can transmit heat, and are high in embodied energy.</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;color:black;font-size:14px;color:black;'>Wall material could be concrete block or stone rather than fired clay brick. Fired clay bricks can be beautiful, some use less energy to make than others, ask for evidence of embodied energy from your builder or supplier.&nbsp;</span></li>
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-family:"Arial",sans-serif;color:black;font-size:14px;color:black;'>Use roof metal sheets rather than clay or concrete tiles for your roof.</span></li>
        <li><span style='font-family:"Arial",sans-serif;color:black;font-size:14px;color:black;'>Use timber for your roof frame rather than steel.</span></li>
        <li><span style='font-family:"Arial",sans-serif;color:black;font-size:14px;color:black;'>Use recycled material that is sourced locally rather than new materials sourced from great distances. &nbsp;This also minimises shipping costs.</span></li>
    </ol>
</div>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:0cm;line-height:normal;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Be aware that some recycled materials are transported long distances and this can counteract the energy benefits of selecting these recycled materials.</span></p> 
    
    `,
  },

  {
    sid: "Cm4tETEWCfX",
    label: "Construction Systems",
    text: 
    `
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Construction systems refer to the combination of materials used to build the main elements of your home. Adelaide&apos;s warm temperate climate means mixed mass construction, a combination of low and high mass construction, which provides the best overall economic and environmental outcomes when combined with passive solar design. The best overall outcome is most simply achieved with a concrete slab-on-ground and lightweight walls. Standard brick veneer construction, which is popular in contemporary homes, is not well-suited to cope with Adelaide&rsquo;s hot summers, or for retaining internal warmth in winter. &nbsp; A better option would be reverse brick veneer, where the bricks (the thermal mass) are placed on the inside of the structural framing, keeping the thermal mass inside the building not outside.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Solid masonry walls (blocks, concrete, stone etc.) in conjunction with concrete floors inside your home will provide a high level of comfort but only if also well insulated. Well, insulated lightweight external walls can reflect unwanted summer sun, keeping high daytime air temperature out or warm air in, while a concrete slab can absorb and re-radiates heat inside your home for your winter comfort.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The design should consider the local climate, transport of materials, availability of materials and ultimately your budget, balanced against known embodied energy content.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Key Considerations for sustainable building design:</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Will the building materials suit the local climate?</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>How will passive heating and cooling be achieved?</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>How long will the building last?</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>What is the climate change impact on materials?</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>How can construction waste be minimised?</span></li>
    </ul>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>To learn more about construction systems and the various techniques that can be used to make a comfortable, climate-resilient home visit:&nbsp;</span><a href="https://www.yourhome.gov.au/materials/construction-systems"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/materials/construction-systems</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
`,
  },
  {
    sid: "Cq6686Vy1mb",
    label: "Household Appliances",
    text: 
    `
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>A careful selection of your home appliances and equipment can save you money and reduce your environmental impact without compromising your lifestyle.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Household appliances and equipment account for about 33% of energy consumption and about 45% of greenhouse gas emissions in the average household.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The&nbsp;</span><a href="https://www.sa.gov.au/topics/energy-and-environment/energy-advice-and-education/energy-advisory-service"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>State Government&apos;s Energy Advisory Service</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;provides South Australians with information about appliance efficiency.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>This service can be contacted on:</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Toll-free: 1800 671 907&nbsp;<br>&nbsp;email:&nbsp;</span><a href="mailto:energyadvice@sa.gov.au"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:windowtext;text-decoration:none;'>energyadvice@sa.gov.au</span></a></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Electrical appliances -</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Choose an appliance with the highest number of stars (Energy Rating Label). A larger model will use more energy than a smaller one with the same star rating. Always check the energy label for the number of kWh (units of electricity) used per year. Sometimes an efficient appliance will cost more to buy, but will soon pay for itself in reduced energy consumption. Standby power can also consume significant amounts of electricity unnecessarily.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Also, consider your habits to see where you can reduce your use of power without compromising your standard of living.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></strong></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Energy-efficient considerations include:&nbsp;</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Energy-efficient appliances such as refrigerators that have a high star rating reduce emissions and can save you hundreds of dollars in the long run.&nbsp;</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>The sun and a clothesline, and an indoor drying rack for the wet weather, have almost no cost.</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Compact fluorescent lights and LED lights in place of some low voltage high wattage fittings.&nbsp;</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Small-sized skylights, to take advantage of free sunlight without overheating your spaces.&nbsp;</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Rooftop solar power systems provide a source of renewable energy which will lower your greenhouse gas emissions, and over a period of time can significantly reduce your energy costs.&nbsp;</span></li>
    </ul>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></strong></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Hot Water Service -</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The right hot water service selection can lower your energy bills and reduce your environmental impact without compromising your lifestyle. Solar hot water heaters are a great choice and significantly reduce the amount of &ldquo;other&rdquo; power you need to heat your water.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Heating and Cooling Systems -</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>The good passive design will greatly reduce the need for supplementary heating and cooling and is key in keeping the entire house comfortable for the greater part of the year without mechanical assistance.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>If the passive design isn&apos;t enough to cool the house during hot weather, ceiling fans should be the first choice for mechanical cooling and can be enough for most warm days.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Any &ldquo;mechanical&rdquo; heating system should be selected on the basis of appliance efficiency.&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Purchase of renewable electrical energy, Green Power, is recommended as the most sustainable option.</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Heating and cooling system recommendations:&nbsp;</span></p>
    <ul style="list-style-type: undefined;margin-left:28.85px;">
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Ceiling fans throughout (other than a bathroom, toilet etc).&nbsp;</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Reverse cycle 6-star minimum, used only in zoned areas and supplemented by the purchase of 100% green power.&nbsp;</span></li>
        <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Avoid centralised air conditioning systems. If used, ensure that your home is well insulated and shaded and has zone controls and thermostats.</span></li>
    </ul>
    <p><span style='font-size:13px;line-height:107%;font-family:"Source Sans Pro",sans-serif;color:black;'>Learn more about energy-efficient appliances and different appliances here &nbsp; https://www.yourhome.gov.au/energy/appliances</span></p>

`,
  },

  {
    sid: "qdk0leDGclj",
    label: "Renewable Energy",
    text: 
    `
    <p>Choosing to invest in renewable energy is an excellent way to reduce greenhouse gas emissions that result from the production of electricity. Clean renewable electrical energy generation systems are becoming increasingly accessible to the average homeowner either installed at home and connected to the grid or purchased as GreenPower. &nbsp;</p>
<p><br></p>
<p>Renewable energy can be purchased from your power provider (GreenPower) or produced onsite by a renewable energy system such as photovoltaic (solar energy) panels. While this requires initial capital investment, you will see a return over time through reduced purchased power costs.&nbsp;</p>
<p><br></p>
<p>Home renewable energy system types:</p>
<p><br></p>
<ol>
    <li>Grid-connected systems - Grid-connected systems interact with the electricity supply grid in urban and rural areas - anywhere there is a reliable electricity grid. The main components of both solar and wind systems are the renewable energy source (i.e. solar and/or wind) and a grid-interactive inverter. &nbsp;If the household uses more energy than the renewable sources can supply, the shortfall is supplied by the grid, so power is always available. If the system is supplying more energy than is needed, the excess energy is fed back onto the grid.</li>
    <li>Stand-alone system: A stand-alone power system has to generate and store the energy the household needs. These systems are more complex and expensive than grid-connected systems because they need to be able to meet the total energy requirements of the household. The main components of a stand-alone system are a renewable energy source, control equipment for battery charging and backup power operation, storage batteries, a backup generator and an inverter.</li>
</ol>
<p><br></p>
<p>Learn more about Green Power and renewable energy systems in this section of the Your Home Manual: <span style='font-size:15px;line-height:107%;font-family:"Calibri",sans-serif;'><a href="https://www.yourhome.gov.au/energy/renewable-energy"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/energy/renewable-energy</span></a></span><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>

    `,
  },


  {
    sid: "EjiLasQAknJ",
    label: "Water Use",
    text: 
    `
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Reducing water consumption in the home is a simple and easy way to reduce water usage, minimise your household&rsquo;s impact on the environment, and save money.</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Reduce the consumption of potable water with these key tips:&nbsp;</span></p>
<div style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>
    <ul style="margin-bottom:0cm;list-style-type: undefined;margin-left:29px;">
        <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Use water efficient devices on showers, toilets, taps and appliances to reduce overall water consumption.</span></li>
    </ul>
</div>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;margin-left:39.0pt;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;border:none;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:black;'>&nbsp;</span></p>
<ul style="list-style-type: undefined;margin-left:29px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Collect, store and use rainwater within the house (such as toilets) and garden watering.</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Utilise grey water where possible to reduce potable water consumption. &nbsp;However check with SA Health before doing so.</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Minimise outdoor water use by choosing plants that are appropriate for local growing conditions.&nbsp;</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Rainwater can also be plumbed throughout the house, or at least to toilets, laundry and gardens.</span></p>
<ul style="list-style-type: undefined;margin-left:29px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>A 2KL rainwater tank may serve toilet and laundry.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>A 20KL rainwater tank may serve the house.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Underground rainwater storage, such as an underground concrete tank, is a good option for sites with space constraints.&nbsp;</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>Key Considerations:</span></p>
<ul style="list-style-type: undefined;margin-left:26px;">
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Use high WELS start rated (Water Efficiency and Labelling Scheme) products in your home&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Re-use of water can be greatly assisted by installing an onsite grey water treatment and reuse system.&nbsp;</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Ask your builder if your rainwater tank can be plumbed to the whole house.</span></li>
    <li><span style='line-height:107%;font-family:"Arial",sans-serif;font-family:"Arial",sans-serif;font-size:10.5pt;color:black;'>Irrigation of gardens can consume large amounts of our mains water, unless we select low water use plants, place mulch, and arrange subsurface or dripper irrigation systems.</span></li>
</ul>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For information about using rainwater visit&nbsp;</span><a href="https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/public+health/water+quality/rainwater/rainwater"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>SA Health</span></a></p>
<p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>For further information on reducing water around the home visit&nbsp;</span><a href="https://www.yourhome.gov.au/water/reducing-water-use"><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;color:#0563C1;'>https://www.yourhome.gov.au/water/reducing-water-use</span></a><span style='font-size:14px;line-height:107%;font-family:"Arial",sans-serif;'>&nbsp;</span></p>`,
  },


  {
    sid: "9VENsruV1V8",
    label: "Urban Greening and Water Sensitive Urban Design",
    text: 
    `
    <p>As the climate changes in the Greater Adelaide region, we are likely to experience higher temperatures, more heat waves, more bushfires, rising sea levels and extremes in weather conditions. &nbsp;We can help to mitigate this by reducing carbon emissions and by adopting more environmentally friendly practices.&nbsp;</p>
    <p><br></p>
    <p>The planning and design of your outdoor space should be considered an integral part of your home&rsquo;s sustainable design.</p>
    <p><br></p>
    <p>Urban greening, together with water-sensitive urban design (WSUD) can make your home more sustainable and more comfortable, such as by reducing urban heat through <a href="https://en.wikipedia.org/wiki/Evapotranspiration">evapotranspiration</a> and shade.</p>
    <p><br></p>
    <p>Urban greening refers to trees, shrubs and lawns planted around the house that can contribute to establishing a local micro-climate. &nbsp; This micro-climate can not only enhance the visual appeal of your home, but it plays an important role in creating a cool garden space to mitigate extreme heat. Greening can be used to control solar access across the year thereby helping to warm and cool your house. It can also assist with managing water and runoff, enhance air quality, biodiversity, habitat creation and provide food, and more.&nbsp;</p>
    <p><br></p>
    <p>WSUD is the integration of water into the design of spaces, acknowledging that water is a valuable resource. There are many WSUD applications, however, they are fundamentally based on creating a more natural water regime, whereby water can seep into the ground, rather than being channelled away off-site. WSUD in your garden can improve soil moisture which helps with plant growth, reduces the need for additional irrigation, and leads to cooling air temperatures, amongst other benefits.&nbsp;</p>
    <p><br></p>
    <p>Shading and cooling -&nbsp;</p>
    <ul>
        <li>Use plants inside and outside of your house to cool down air temperatures and improve air quality.</li>
        <li>To control solar access into the house, create shade with deciduous trees (trees that lose leaves in winter) in north-facing outdoor areas, and along the west side of the house to provide shade in summer and allow sun through in winter. Large shrubs and climbing plants can also create effective shading of the house.&nbsp;</li>
        <li>Where space is limited, use shade structures with climbers to reduce outdoor and building temperatures.</li>
        <li>Consider creating a small mini-oasis which can provide passive cooling to the house. Locate this area on the side of the building which receives evening breezes. Incorporate moisture-loving plants, a water feature, permeable paving and water-harvesting methods in this space.</li>
        <li>Water lawns and plant days leading up to a heat wave to help create a cooler yard and house. This can help reduce the extreme effects of the heat wave in your home.</li>
    </ul>
    <p><br></p>
    <p>Create a sustainable garden -&nbsp;</p>
    <ul>
        <li>Try to retain as much vegetation on site as possible, particularly drought-tolerant species.&nbsp;</li>
        <li>Include a mix of native and exotic species in your garden to reduce the need for watering, create shade, maximise biodiversity and attract birds and insects.&nbsp;</li>
        <li>Apply principles of WSUD such as creating spaces in the garden where water can soak into the ground, using permeable surfaces to maximise onsite infiltration and reduce runoff, and installing a rainwater tank, or a green roof (a rooftop garden).&nbsp;</li>
        <li>Direct downpipes and overflow pipes into rainwater tanks and/or into a rain garden to provide water for plants and to cool outside air temperatures. The reuse of this water can reduce your water bills, whilst minimising runoff to the street stormwater system.&nbsp;</li>
        <li>If an irrigation system is needed, install a drip irrigation system as these are water efficient.&nbsp;</li>
        <li>Group plants together that require similar watering regimes.</li>
        <li>Minimise outdoor paving as this increases heat radiation and water runoff from the site, and use permeable paving where a hard surface is needed (permeable paving allows water to soak between the pavers into the ground).</li>
        <li>Establish a vegetable garden and a composting system in your yard to supply healthy food, reduce waste in landfills and reduce your household&rsquo;s ecological footprint.&nbsp;</li>
        <li>Use recycled materials or materials with a low embodied energy for garden elements (for example recycled hardwood timber for garden edging).</li>
    </ul>
    <p><br></p>
    <p>To learn more about reducing water use around the home and WSUD have a look at the resources available on the <a href="https://www.watersensitivesa.com/resources/wsud-for/community/">Water Sensitive SA</a> home page</p>
    `,
  }

];

// // For debugging purposes (lists js array of elements in console)
// elements.forEach(showMySID);

// function showMySID(element) {
//   console.log(element.sid," ",element.label);
// }

// intro transition

document.addEventListener("DOMContentLoaded", () => {
  iframe = document.querySelector(".showcase");
  textBoxHolder = document.querySelector(".textBoxHolder");
  titleHolder = document.querySelector(".titleHolder");
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

  // sidSelector.setAttribute("value", matSid);

  // sidSelector.addEventListener("keyup", (e) => {
  //   if (e.key === "Enter") {
  //     matSid = sidSelector.value;
  //     iframe.setAttribute("src", `${matSpace}${matSid}${params}`);
  //   }
  // });


});

function showcaseLoader() {
  try {
    window.MP_SDK.connect(iframe, key, "3.5")
      .then(loadedShowcaseHandler)
      .catch(console.error);
  } catch (e) {
    console.error(e);
  }
}

function loadedShowcaseHandler(mpSdk) {
  let movingTag = false;
  
  // //for debug purpose: lists matterport array of mattertags in an array in the console
  // mpSdk.Mattertag.getData()
  // .then( (tags) => {
  //     console.log(tags);
  // })
  // .catch(console.error);

  
    
  populateTags(elements);



  function populateTags(tags) {
    tags.forEach(addButton);
  }

  function addButton(tag) {
    let button = document.createElement("button");
    table_container_button.append(button);
    button.setAttribute("id", `${tag.sid}`);
    button.innerText = `${tag.label}`;
    button.addEventListener('click', addTagListeners(button));
  }

  function addTagListeners(block) {
    if (block) {
      block.addEventListener("click", () => {
        showText(block.id);
        mpSdk.Mattertag.navigateToTag(
          block.id,
          mpSdk.Mattertag.Transition.FADEOUT
        ).catch((e) => {
          console.error(e);
        });
      });
    }

    function showText(id) {
      const text = elements.filter(function (el) {
        return el.sid == id
      });
      titleHolder.innerHTML = text[0].label;
      textBoxHolder.innerHTML = text[0].text;
      
    }

  }

}
