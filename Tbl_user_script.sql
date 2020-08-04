USE [autodeskdb]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tbl_User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](80) NOT NULL,
	[LastName] [nvarchar](80) NOT NULL,
	[Password] [nvarchar](80) NOT NULL,
	[UserName] [nvarchar](80) NOT NULL,
	[CreatedBy] [nvarchar](80) NOT NULL,
	[ModifitedBy] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifitedDate] [datetime] NULL,
 CONSTRAINT [PK_dbo.Tbl_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
