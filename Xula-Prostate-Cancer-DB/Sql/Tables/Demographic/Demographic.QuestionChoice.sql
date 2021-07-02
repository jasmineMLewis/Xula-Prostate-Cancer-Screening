USE [Xula_ProstateCancerScreening]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Demographic].[QuestionChoice](
	[ChoiceID] [int] IDENTITY(1,1) NOT NULL,
	[Choice] [varchar](50) NULL,
 CONSTRAINT [PK_DemographicQuestionChoice] PRIMARY KEY CLUSTERED 
(
	[ChoiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


