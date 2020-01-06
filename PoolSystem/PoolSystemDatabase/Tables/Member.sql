CREATE TABLE [dbo].[Member]
(
	[Id] INT NOT NULL IDENTITY PRIMARY KEY,
	[FirstName] NVARCHAR(40) NOT NULL,
	[LastName] NVARCHAR(40) NOT NULL,
	[Address] NVARCHAR(100) NOT NULL,
	[Phone] VARCHAR(20) NOT NULL,
	[LastPaymentId] INT NULL, 
    CONSTRAINT [FK_Member_Payment] FOREIGN KEY ([LastPaymentId]) REFERENCES [Payment]([Id])
)
