CREATE TABLE [dbo].[Card]
(
	[Id] INT NOT NULL IDENTITY PRIMARY KEY,
	[StartDate] DATETIME NOT NULL,
	[EndDate] DATETIME NOT NULL,
	[CardInfoId] INT NOT NULL,
	[PaymentId] INT NOT NULL,
	CONSTRAINT [FK_Card_CardInfo] FOREIGN KEY ([CardInfoId]) REFERENCES [CardInfo]([Id]),
	CONSTRAINT [FK_Card_Payment] FOREIGN KEY ([PaymentId]) REFERENCES [Payment]([Id])
)
