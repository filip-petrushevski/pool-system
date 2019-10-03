CREATE TABLE [dbo].[CardInfo]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[Name] NVARCHAR NOT NULL,
	[DurationInDays] INT NOT NULL,
	[VisitsInWeek] INT NOT NULL,
	[Price] INT NOT NULL
)
