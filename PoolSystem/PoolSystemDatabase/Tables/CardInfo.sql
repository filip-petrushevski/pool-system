﻿CREATE TABLE [dbo].[CardInfo]
(
	[Id] INT NOT NULL IDENTITY PRIMARY KEY,
	[Name] NVARCHAR(50) NOT NULL,
	[DurationInDays] INT NOT NULL,
	[VisitsInWeek] INT NOT NULL,
	[Price] INT NOT NULL,
	[ImageUrl] NVARCHAR (200) NULL,
)
