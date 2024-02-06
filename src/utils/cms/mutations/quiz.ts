import { gql } from "@apollo/client";

export const SAVE_QUIZ_MUTATION = gql`
  mutation quiz($categories: CategoriesInput!) {
    createPost(input: {categories: $categories}) {
      post {
        quiz {
           areYourOrganizationNationalOrInternational
           doTeamMembersActivelyParticipateAndContribute
           doTeamMembersOftenExperienceHighLevelsOfStressAtWork
           enterYourDetailsToGetAccessToTheAdminDashboard {
             firstName
             lastName
             workEmail
           }
           howDoYouPerceiveTheOverallMoraleOfYourTeam
           howOftenDoYouExperienceConflictsInYourTeam
           howWellDoTeamMembersKnowEachOtherOnAPersonalLevel
           letSCreateAStepChallengeDate
           letSCreateAStepChallengeTitle
           selectUpToThreeAreasWhereYouBelieveTheTeamCouldImproveTheMost
           selectYourMainGoal
           teamMembersFeelComfortableExpressingTheirThoughtsAndIdeasOpenly
           whatIsYourTeamSWorkScheduleLike
           whatIsYourTeamSize
           whatIsYourTeamsWorkStyle
           whatTypeOfOrganizationAreYouWorkingIn
           wouldYouLikeToMotivateParticipationWithRewards
        }
      }
    }
  }
`;
