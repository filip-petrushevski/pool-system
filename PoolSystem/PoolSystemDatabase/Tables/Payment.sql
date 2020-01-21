CREATE TABLE [dbo].[Payment]
(
	[Id] INT NOT NULL IDENTITY PRIMARY KEY,
	[PaymentType] INT NOT NULL,
	[CreatedOn] DATETIME NOT NULL,
	[EmployeeId] INT NOT NULL,
	[MemberId] INT NOT NULL,
	[CardId] INT NOT NULL, 
    CONSTRAINT [FK_Payment_Employee] FOREIGN KEY ([EmployeeId]) REFERENCES [Employee]([Id]),
    CONSTRAINT [FK_Payment_Member] FOREIGN KEY ([MemberId]) REFERENCES [Member]([Id]),
    CONSTRAINT [FK_Payment_Card] FOREIGN KEY ([CardId]) REFERENCES [Card]([Id])
)
