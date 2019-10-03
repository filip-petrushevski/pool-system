﻿CREATE TABLE [dbo].[Visit]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[ArrivalDateTime] DATETIME NOT NULL,
	[LeaveDateTime] DATETIME NOT NULL,
	[CardId] INT NOT NULL,
	[LockerId] INT NOT NULL,
	CONSTRAINT [FK_Visit_Card] FOREIGN KEY ([CardId]) REFERENCES [Card]([Id]), 
	CONSTRAINT [FK_Visit_Locker] FOREIGN KEY ([LockerId]) REFERENCES [Locker]([Id]) 
)
