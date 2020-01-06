﻿CREATE TABLE [dbo].[Employee]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[FirstName] NVARCHAR(40) NOT NULL,
	[LastName] NVARCHAR(40) NOT NULL,
	[Address] NVARCHAR(100) NOT NULL,
	[Phone] VARCHAR(20) NOT NULL,
	[DeletedOn] DATETIME, 
    [Username] NVARCHAR(50) NOT NULL UNIQUE,
    [Password] NVARCHAR(50) NOT NULL
)
