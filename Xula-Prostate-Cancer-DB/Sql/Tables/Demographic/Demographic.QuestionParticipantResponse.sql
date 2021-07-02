USE [Xula_ProstateCancerScreening]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [Demographic].[QuestionParticipantResponse](
	[QuestionParticipantResponseID] [int] IDENTITY(1,1) NOT NULL,
	[fk_ParticipantID] [int] NOT NULL,
	[fk_QuestionID] [int] NOT NULL,
	[fk_ChoiceID] [int] NOT NULL,
 CONSTRAINT [PK_ParticipantDemographicQuestionResponses] PRIMARY KEY CLUSTERED 
(
	[QuestionParticipantResponseID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO


