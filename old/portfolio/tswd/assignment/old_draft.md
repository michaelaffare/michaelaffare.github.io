# Critique of CNBC's "Marvel heroes propelled Disney to overtake Sony at the top of the 2021 domestic box office"


## Step 1: find a data visualization (with data you can use)!
The <a href="https://www.cnbc.com/2022/01/07/disney-topped-the-2021-domestic-box-office.html" target="_blank">CNBC article on "Marvel Heroes propelled Disney to Top 2021's Domestic Box Office"</a> contains the below visualisations aimed at communicating how Marvel movies helped Disney to become the leading studio in 2021 in terms of Box office earnings.

I chose this visualization because I covered an interesting topic on who big Marvel movies are as a business opportunity.

#### Step 1b: getting the data
The visualisation sited Camscore as the data source however there was no link directly to the data to be used. 
I found a comparable data source from Box Office Mojo; the CNBC visualization figures were consistent with that source:
It required scraping the table on the Box Office Mojo website, cleaning up the data and aggregatting some studios under their parent companies.
Eventually arriving at comparable figures.


## Step 2: critique the visualization
Summary: <br/>
CNBC used 5 simplified and intuitive graphs:
- 1 “segmented bar graph”, 
- 3 “bar graphs” and a 
- 1 “3-column table” (with a small bar graph visualization in the 3rd column) 
<br/>
![cnbc_vizualisations](../../../img/assignmet/3n4/1_cnbc_viz.png)
Source: <a href="https://www.cnbc.com/2022/01/07/disney-topped-the-2021-domestic-box-office.html" target="_blank">CNBC Entertainment</a>
<br/>
These visuals were used to convey the message "Marvel Heroes propelled Disney to Top 2021's Domestic Box Office". 
The visuals focused on the North American domestic Box Office and used numbers that are focused on that audience.
Although these 5 visualizations are individually clear and contain true facts, they do not effectively highlight the main point (i.e., Marvel movies helped Disney top the box office). 
The viewer is required to mentally piece together the visualisations and draw a conclusion that is not obvious in the visualizations. 
The Marvel movies were not highlighted so it is assumed that every reader already knows which movies are Marvel movies. This assumption may cause readers who are not subject matter experts to miss the point of the visualisations.
The average entertainment segment reader of CNBC articles may appreciate one or two simple visual that already provides direct visual comparisons. They would also appreciate some level of intereactive design that allows them to explore the data.   
In summary, the 5 visuals are aesthetically simple and clean but are not directly addressing the point. 
They are useful, true, and intuitive but may need some improvement to make them collectively useful to the reader and perceptible (convey the point of the article more directly).
<br/>
Scores
- Usefulness: (6/10)
- Completeness: (7/10)
- Perceptibility: (7/10)
- Truthfulness: (6/10)
- Intuitiveness: (7/10)
- Aesthetics: (7/10)
- Engagement: (5/10)


## Step 3: wireframe a solution
Based on the critique, I assessed the data and realized that this kindly of information could be better represented with 
-  Segmented bar graph
-  Tree Maps

#### Solution 1: Segmented Bar
The first idea was to capture the marvel and non-marvel movie segments within the same bar graph so it is obvious how each segment impacted the general performance. 
The bar graphs were then ordered in descening order from the top ranked studio to the least ranked to make it obvious that Disney was the leading studio.<br/>
![2_sol1](../../../img/assignmet/3n4/2_sol1.png)


#### Solution 2: Treemap
A treemap tries to capture everything in proportions.
![2_sol2](../../../img/assignmet/3n4/3_sol2.png)



## Sept 4: test the solution (get feedback)
People from different backgrounds were interviewed including an architect, social worker, data analyst, human resource person etc. This was to help see the visualisations from a different viewpoint.

Some people found the treemap concept confusing whiles others (like the architect) found that visualization very intuitive. But the general idea was that both proposed solutions made it easier to get the idea being conveyed by the title. Some improvements were suggested concerning the use of colour and the orientation of the bar graphs.

A report of the interviews is summarized below:
<a href="https://docs.google.com/forms/d/19SKseS_ksZhfiW71MLcn495kR6TKzsdJsj6n60cgaVU/viewanalytics" target="_blank">Link to solution testing interviews - feedback</a>


#### improvements to designs (after feedback)
Solution 1: review 1
![4_sol1_improved1](../../../img/assignmet/3n4/4_sol1_improved1.jpg)
Further simplification and removing duplicate information resulted in 
Solution 1: review 2
![5_sol1_improved2](../../../img/assignmet/3n4/5_sol1_improved2.jpg)

Solutions 2: review 1
![6_sol2_improved1](../../../img/assignmet/3n4/6_sol2_improved1.jpg)

The raw data contains a lot of information that could be hidden behind these designs and reviewed through interactive design tools avialable in flourish. This simplifies the overview of the visualisation for viewers who just want a gist and gives curious viewers the opportunity to drill down to discover movies of interest.

## Step 5: build your Solutions

#### Solution 1: Segmented bar graph
The final solutions allowed the viewer to engage with the designs and uncover more information if needed:

This is the bar graph that shows how Marvel movies pushed Disney to the top
<div class="flourish-embed flourish-hierarchy" data-src="visualisation/11217477"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

#### Solution 2: Treemap graph
A treemap reveals the proportions of the various segmets and directly shows how much of an impact Marvel movies had on Disney studio's performance. 
<div class="flourish-embed flourish-hierarchy" data-src="visualisation/11216182"><script src="https://public.flourish.studio/resources/embed.js"></script></div>



## Final classroom review
The solution was shared with a group of 4 colleagues and the following suggestions were made
- The colour is too faint;  hard to read the labels/text
- the use of colour for the "Other Marvel Movies" and "Other Disney Movies" should be consistent
- Percentages to 2 decimal places is an unneccesary detail
- Colour scheme should reflect more of a MARVEL theme (matte red and white could be more relateable)
- Improve the title: Include Sony as a direct comparison to Disney

> Final visualization: Solution 1 
<div class="flourish-embed flourish-hierarchy" data-src="visualisation/11235444"><script src="https://public.flourish.studio/resources/embed.js"></script></div>


> Final visualization: Solution 2
<div class="flourish-embed flourish-hierarchy" data-src="visualisation/11236455"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

Conclusion:
The design process was iterative and getting feedback from friends and peers really helped me see the visualization in a different light.
I can understand that the original design was probably done within a shorter period which did not allow for such elaborate considerations in design. I hope that my redesign adds value to the insightful message captured by the author in this CNBC article.

By Michael Affare



[Back](../../tswd/readme.md)