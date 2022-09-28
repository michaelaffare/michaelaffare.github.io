# The worth of a CMU MISM degree in the US job market . . 
### A visualisation of value and demand placed on the Carnegie Mellon University's Master of Information Systems Management degree in US

[Home](readme.md)

### Outline
The average Hienz College student is somehow convinced that a CMU Master of Information Systems Management degree is valued by many top companies. (I am one of them).
The job hunting season eventually arrives as a MISM student is about to graduate.
This season is innundated with information overload and unanswered questions.

- What job roles should I be looking at?
- What companies should I interview with during career fairs?
- Apart from Google, Amazon, Facebook and Microsoft, what other companies are interested in my skills?
- What salary expectation is reasonable?
- Which state will I likely work in?
- Is this even worth it? Will I get a return on my investment in this degree?
- Am I even likely to complete this program or get an offer when I search for jobs?

These questions constantly plague the student and the person who has a clearer mental picture is able to make more effective decisions during their career search process.

##### The project Objective:
###### "The worth of a CMU MISM degree in the US job market"
This project seeks to tell the story of the MISM program to the primary audience (the MISM student looking for a job).
After reading this project the MISM student should have a clear mental image of the MISM program and how it has historically performed in the US job market.

Hopefully this will equip the MISM student with answers to the questions above and make informed decision on the key points below:
- Salary expectations
- Options with Job roles
- The companies that frequently offer jobs
- Same likely locations of the jobs offered
- General idea of employment rates (the rate at which students get offers)

The career searvices team and admissions team will also be provided a quick read that they can give to current or prospective students to showcase the value of the MISM program and how the program has interacted with the US Job industry over the years.

#### Scope:
The project's scope has been limited to the MISM program and the years 2015 to 2022 so as to have a clear and focused topic that can be explored in different ways. Also the data extraction process is time consuming (only MISM program required data extraction from 32 PDF) hence limiting the story to MISM program allowed for more time to develop the story and explore various ways to analyze the data and extract insights from it.


#### Audience
This story is intended for:
1. Carnegie Mellon University MISM students
2. Prospective CMU MISM students
3. Faculty 
4. Staff (Career Services, Admissions Office etc)
5. General public and readers

#### Story arc 
The "Rags to Riches" story arc will adopt the plot of students who is pursuing a demanding CMU MISM degree in the hope of landing a good-paying tech jobs. It will highlight the dilemma of job search and the information overload that happens during career fairs, events and handshake posts. This story will then serve as a tool to help the student answer some key questions that will enhance his/her/their job search.

> A CMU MSIM degree in the US job Market
!["Story Arc: Rags to Riches"](../../img/project/storyArc.jpg)

The narrative should subtly answer the below questions for the reader:
1. How many students apply for MSISM and complete the program?
2. What has been the employment rate of students who graduate from the MISM program?
3. What are the categories of job roles that are frequently seeking MISM graduates? (Do you have the skills?)
4. Job hunt: What companies should you consider for the roles mentioned?
5. Salaries: What is a reasonable salary expectation for a MSISM student?
6. What locations could you end up in when offered a job? And where are you likely to find alums working?
7. Conclusion 1: Summary; the value of a CMU MISM degree
8. Conclusion 2: Call to action: See career services, identify your skills and matching roles, and target the companies listed that offer those roles.

### Sketches

#### Charts and visualizations
Initial visualizations were explored using the extracted data.
This was to get an initial idea of what information is being conveyed by the data.
It also provided an opportunity to explore visualisation tools and options available to aid this story.
Flourish, excel and hand sketches were used to develop the first few ideas; these will be improved upon in part II of the project.


###### Salary Ranges Over Time
 (the recorded highest, lowest and mean salaries offered to students per year are captured in this visualisation)
- this will help the students mention reasonable salary expectations during interviews and know if the program is being valued at a higher price or lower. 

> initial excel draft
!["Salary Range over Time"](../../img/project/SalaryRangesOverTime.png)
> Further development in Flourish
<div class="flourish-embed flourish-chart" data-src="visualisation/11296909"><script src="https://public.flourish.studio/resources/embed.js"></script></div>


###### Count of Companies that gave offers each year
This vidsualization will aid students to know the companies who know about MISM students, may have alumni working there and are likely to give job offers to MISM students
> initial excel draft
!["Count of Companies that offer jobs"](../../img/project/NumberOfEmployersPerYear.png)
> improved visualisation in Flourish
<div class="flourish-embed" data-src="visualisation/11291041"><script src="https://public.flourish.studio/resources/embed.js"></script></div>


######  Popular locations for CMU MISM program jobs
Jobs often require students to move to their office locations and this is an important information that students need to know so they would research those locations and be better prepared to relocate if required.

> initial from excel
!["Popular locations offered"](../../img/project/OffersAndLocations.png)
> Flourish expirementation
<div class="flourish-embed" data-src="visualisation/11291110"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

###### Popular job roles for MSISM graduates 
Students are often limited with options when it comes to job roles that they might want to do; Most students resort to Software Developer or Engineer, Data Scientist or Consulting.
This visual will help the MISM student become familiar with other popular options and explore the role to see if their career goals align with any of them. This broadens the horizon.

> initial draft 
["Job roles represented"](../../img/project/jobRolesRepresentedBar.png)


> Design in Flourish
<div class="flourish-embed" data-src="visualisation/11291097"><script src="https://public.flourish.studio/resources/embed.js"></script></div>


###### Student Job offer statistics
> This was suggested during the classroom critique. The visualization should be able to identify the proportions of students who got offers against those who didn't or those who chose to continue schooling etc.
This graph could really calm the nerves of some students who may be anxious about getting a job.

<div class="flourish-embed flourish-chart" data-src="visualisation/11305762"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

###### Jobs types offered by companies
> This was also suggested in the class group critique:
This visualization style with a filter allows the viewer to see which companies and the roles they have previously been intersted in filling with former CMU students.

<div class="flourish-embed flourish-hierarchy" data-src="visualisation/11305963"><script src="https://public.flourish.studio/resources/embed.js"></script></div>

#### Flourish visualizations
After importing the data into Flourish, some visualisation options to explore are below:
- [X] Tree map: The roles frequently offered by each company 
- [X] Segmented bar graph: Job role categories and the percentages they represent in the total offers within each year


### Data
This topic required reliable data from CMU Hienz college admissions and career services.
Thankfully all this information was publicly available on the Heinz Website:  <a href="https://www.heinz.cmu.edu/current-students/career-services/employment-information-salary-statistics" target="_blank">heinz.cmu.edu Employment Information Salary Statistics</a> as PDFs organized by program.

The information on MISM program was in detailed PDF documents realeased for each graduation period (May, August and December).

> A sample PDF data
!["Sample PDF data"](../../img/project/sampleDataPdf.png)

With the help of tools like <a href="https://tabula.technology/" target="_blank"> Tabula (PDF data extraction tool)</a> and <a href="https://www.ilovepdf.com/" target="_blank">ilovePDF</a>, the data was extracted into an excel sheet for analysis.

Some derived statistical data was also calculated within the excel sheet to be able to better visualize the raw data. 

> Resulting data sets:
- [X] <a href="https://www.heinz.cmu.edu/current-students/career-services/employment-information-salary-statistics" target="_blank"> Raw PDF data on CMU website</a>
- [X]  Matriculation/enrollment counts: The Heinz Admissions Office provided some matriculation counts over email correspondence. This is also found in each raw PDF file on the CMU website.
- [ ] <a href="https://docs.google.com/spreadsheets/d/1tBsIfc-lboYxNFbu3CW3X2cO1hVZPUelgzTBsIz3ZP8/edit?usp=sharing" target="_blank"> Cleaned data in a GoogleSheets file.</a> This consolidates the data from the PDFs and adds calculated columns.

> Data aggregation and classification:
Data classification has been done in of data into years, job role categories, geographical sections and program tracks. This helped to summarize the data even more and provides an opportunity for interactive design.


#### Method and medium
The strategy to complete the project is outlined below:
> Complete data extraction and accuracy check:
With the aid of Tabula, all the PDF files for MSISM will be converted to Excel relational tables.
This scopes 32 PDF files that include all MISM (i.e Global 21 month track, BIDA, 16 month track, 12 month track) data from 2015 to date.

> Aggregate data into meaningful categories:
The extracted data will need further processing to introduce new columns that improve the data visualisation:
Some of the aggregation tasks may include
-  Years
-  Job role categories (e.g. software developers)
-  Employeer 
-  Introduce decimals to identify graduation months (for time series graphs to show distinctions between graduation batches data)

> create summary statistics from the data:
Some general statistics will require grouping the categorized data and calculating the counts, averages etc.
This will also help to rank the results and focus on the top categories whiles blurring other smaller categories.

> Load data into Flourish and Tableau (visualization tools)
The data (both detailed and summary statistics) will be loaded into Flourish and Tableau and properly formatted so visualizations can be generated.

> Explore visualization options:
This is where a lot of experimentation will be required to come up with the ideal visualisation styles that effectively communicate the story. 

> Get feedback for the visualizations and iteratively improve the visualizations
Visualization ideas will be saved and shared with friends for feedback and improvement.

> Develop an opinion/story based on the insights from the project
Based on the numbers and visuals a story conclusion can be derived; this will inform the perspective and tone of the story being told. As at now the story perspective is not clear however the questions to be answered are the goal and that will guide the process of this story telling.

> Create a shorthand story.
A shorthand story will be created to capture the project findings and story. This will be published publicly.
Images to be used will be from the CMU website or images that have personally been taken during the job search; these are not expected to have any trademark violations or copyright restrictions.

> Test the shorthand story arc with reviewers and make improvements.
Test the story with friends and family and use construction critique feedback to improve the story arc, content and visualizations.


#### Call to action
The call to action would be for MISM students
1. To be aware and have the mental picture discussed in mind during job search
2. Price themselves appropriately looking at trends and averages
3. Check other job roles within the category of roles and search for those jobs during job search
4. Sign-up for career fairs for companies that frequently offer roles of interest.


### Classroom review
After a group discussion of the topic and points
> What worked?
- The relevance of the topic to the target audience is high
- The value extracted and visualised from the data is significant (visuals will really transform this data)

> What didn't work?
- Colour scheme needs to be improved.
- Categories of data need to be clearly outlined

> What questions came up?
- Is this project going to be extended to other programs? Ans: The scope was limited to MISM due to time constraints and to keep the original story concise, however the concept and methodology can be applied to all other programs

> What new inspiration arose?
- Share the story from the perspective of a student

#### todo list from class review
> Low effort with high value
- [X] Include filters (for program types)
- [X] Include the line/data representing students who don't get offers: new visualization created to capture offers given and students without offers
>  High effort with high value
- [ ] Indicate the return on investment for students (is it worth pursuing a CMU MISM degree?)

### Conclusion
The process of choosing the topic, finding the relevant data and developing the story arc has been interesting and intense.
My major takeaway was that sometimes golden information is trapped witihin a format that is not easy to extract and visualize. However if that hurdle is surmounted, then readers and viewers of the visualisation can benefit immensely from the extracted data.

Also deciding on the visualisation type to use requires some creativity and following of design standards/expectations.
Fiddling with tools like Flourish helped to get a fair idea what visualisations may be used for this project. 

Classroom critique gave an edge and also offered some new insights on what to include and things that were not clear. Constructive crititisms always add value and I am getting much better at taking feedback.

[Back](readme.md)


