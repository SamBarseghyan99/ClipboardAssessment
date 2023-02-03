# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
I will prefare to brack down this into 2 tasks.
 - Create GetShiftByFacility function
 - Create GenerateReport function
 ~ GetShiftByFacility - Write a queue for finding shifts in current facility and select ones with current agent Id. DBConnection type need to be for only reading.
 ~ GenerateReport - After installing pdfkit library just need to put the currenct list of Agent shifts' into text block and generate report with needed form in PDF file. Another function can be us GenerateReport function to send reports to Agents mail addresses.
 Both functions can be written in couple hours without any problems. For clear answer I'll say 4 up to 5 hours.

 For having Facility-Agent connection, we'll need to made another table with Facility and Agent tables' primary keys because of many-to-many relation type. My solution for GetShiftByFacility function is based on the db architecture I've described above.