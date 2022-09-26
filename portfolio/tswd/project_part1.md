# Carnegie Mellon University's Master of Information Systems Management (MISM) employment history and salaries
## a report on the previous trends and expectations

["Back"](readme.md)

### Outline
As a final year Master of Information Systems Management (MISM) student at Carnegie Mellon Uniersity, one major task is to job hunt. With all the career fairs, handshake postings, seminars and expectations it may be difficult for a MISM student to have a clear mental picture of the options available, results from previous years and even the salary expectations. 

This project seeks to create a clear image in the minds of MISM students concerning the job application process. 
This project will arm the student with:
- Salary expectations
- Options with Job roles
- The companies that frequently offer jobs
- Same likely locations of the jobs offered
- General idea of employment rates (rate at which students get offers)

Being able to tell this story over the years will equip the MISM student with handy informmation on where to start the job search, what roles to focus on and what salary expectations are reasonable.

The scope of the project has been limited to the MISM program so that a clear and detailed story can be told.

#### Story arc 
1. How many students apply for MSISM and complete the program?
2. What has been the employment rate of students who graduate from the MISM program?
3. What are the categories of job roles that are frequently seeking MISM graduates? (Do you have the skills?)
4. Job hunt: What companies should you be looking at for the roles mentioned?
5. Salaries: What is a reasonable salary expectation for a MSISM student?
6. What locations could you end up when offered a job? And where are you likely to find alumni working?
7. Conclusion 1: Summary; the value of a CMU MISM degree
8. Conclusion 2: Call to action: See career services, identify your skills and matching roles, target the companies listed that offer those roles.


### Sketches

##### Excel graphs
Very basic visualisations were tested within excel to have a fair idea what story is being told by the data.
Although this has very poor design principles, it gives a priliminary view of the data and provides a blueprint for sketching and prototyping visualizations within other tools.

> Salary Ranges Over Time
!["Salary Range over Time"](../../img/project/SalaryRangesOverTime.png)

> Count of Companies that gave offers each year
!["Count of Companies that offer jobs"](../../img/project/NumberOfEmployersPerYear.png)

> Popular locations for CMU MISM program jobs
!["Popular locations offered"](../../img/project/OffersAndLocations.png)

> Popular job roles for MSISM graduates
!["Job roles represented"](../../img/project/JobRolesRepresented.png)


#### Flourish visualizations
After importing the data into Flourish, more advanced and cleaner visualisations were tested using the concepts developed from the initial data exploration in excel.
More advanced visualizations that answer questions like
1. Heat map: The roles frequently offered from each company 
2. Segmented bar graph: Job role categories and the percentages they represent in the total offers within each year



### Data

Most of the data may be found at <a href="" target="_blank">heinz.cmu.edu Employment Information Salary Statistics</a> as PDFs organized by program.

> A sample PDF data
!["Sample PDF data"](../../img/project/sampleDataPdf.png)

With the help of <a href="https://tabula.technology/" target="_blank"> Tabula (PDF data extraction tool)</a> the data was extracted into an excel sheet so insights can be drawn from the structured data.

> Resulting data sets
- [ ] ["Cleaned data"](https://docs.google.com/spreadsheets/d/1tBsIfc-lboYxNFbu3CW3X2cO1hVZPUelgzTBsIz3ZP8/edit?usp=sharing)
- [ ] ["Raw PDF data on CMU website"](https://www.heinz.cmu.edu/current-students/career-services/employment-information-salary-statistics)
- [ ] Program completion rate: Email correspondense with Admissions offers provided some Matriculation numbers to help get a comparison of the count of students who get an offer and the counts of students who complete the CMU program.

> Data aggregation:
Because there are several data points and years it is essential to aggregate the data so too much information is not presented at a time. The classification of data into years, job role categories, geographical sections and program tracks help to summarize the data even more and provides an opportunity for interactive design.


#### Mehtod and medium