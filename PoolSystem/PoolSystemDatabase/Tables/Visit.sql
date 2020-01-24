CREATE TABLE [dbo].[Visit]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[ArrivalDateTime] DATETIME NOT NULL,
	[LeaveDateTime] DATETIME NULL DEFAULT NULL,
	[CardId] INT NOT NULL,
	[LockerId] INT NOT NULL,
	[Confirmed] BIT NULL DEFAULT 0,
	CONSTRAINT [FK_Visit_Card] FOREIGN KEY ([CardId]) REFERENCES [Card]([Id]), 
	CONSTRAINT [FK_Visit_Locker] FOREIGN KEY ([LockerId]) REFERENCES [Locker]([Id]) 
)
