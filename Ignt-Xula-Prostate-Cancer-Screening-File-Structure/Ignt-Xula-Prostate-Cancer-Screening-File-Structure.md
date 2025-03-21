# Ignt-Xula-Prostate-Cancer-Screening File Structure

C:.
|   index.html
|   main.ts
|   polyfills.ts
|   styles.css
|   test.ts
|   
+---app
|   |   app-routing.module.ts
|   |   app.component.css
|   |   app.component.html
|   |   app.component.ts
|   |   app.module.ts
|   |   
|   +---core
|   |   |   core.module.ts
|   |   |   
|   |   +---components
|   |   |   +---footer
|   |   |   |       footer.component.css
|   |   |   |       footer.component.html
|   |   |   |       footer.component.ts
|   |   |   |       
|   |   |   \---header
|   |   |           header.component.css
|   |   |           header.component.html
|   |   |           header.component.ts
|   |   |           
|   |   +---data
|   |   |       best-choice-main-tab-data.ts
|   |   |       diagnosis-treatment-main-tab-data.ts
|   |   |       prostate-importance-main-tab-data.ts
|   |   |       prostate-screening-main-tab-data.ts
|   |   |       risks-symptoms-main-tab-data.ts
|   |   |       
|   |   \---models
|   |           module-main-tabs.ts
|   |           
|   +---features
|   |   +---best-choice
|   |   |   |   best-choice-routing.module.ts
|   |   |   |   best-choice.module.ts
|   |   |   |   
|   |   |   +---components
|   |   |   |   +---best-choice-credits
|   |   |   |   |       best-choice-credits.component.css
|   |   |   |   |       best-choice-credits.component.html
|   |   |   |   |       best-choice-credits.component.ts
|   |   |   |   |       
|   |   |   |   +---best-choice-preferences
|   |   |   |   |       best-choice-preferences.component.css
|   |   |   |   |       best-choice-preferences.component.html
|   |   |   |   |       best-choice-preferences.component.ts
|   |   |   |   |       
|   |   |   |   +---best-choice-summary
|   |   |   |   |       best-choice-summary.component.css
|   |   |   |   |       best-choice-summary.component.html
|   |   |   |   |       best-choice-summary.component.ts
|   |   |   |   |       
|   |   |   |   +---best-choice-title
|   |   |   |   |       best-choice-title.component.css
|   |   |   |   |       best-choice-title.component.html
|   |   |   |   |       best-choice-title.component.ts
|   |   |   |   |       
|   |   |   |   +---choices
|   |   |   |   |   |   choices.component.css
|   |   |   |   |   |   choices.component.html
|   |   |   |   |   |   choices.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---prostate-surgery
|   |   |   |   |   |       prostate-surgery.component.css
|   |   |   |   |   |       prostate-surgery.component.html
|   |   |   |   |   |       prostate-surgery.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---screening-for-you
|   |   |   |   |   |       screening-for-you.component.css
|   |   |   |   |   |       screening-for-you.component.html
|   |   |   |   |   |       screening-for-you.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---watchful-waiting
|   |   |   |   |           watchful-waiting.component.css
|   |   |   |   |           watchful-waiting.component.html
|   |   |   |   |           watchful-waiting.component.ts
|   |   |   |   |           
|   |   |   |   +---decision
|   |   |   |   |   |   decision.component.css
|   |   |   |   |   |   decision.component.html
|   |   |   |   |   |   decision.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---getting-screened
|   |   |   |   |   |       getting-screened.component.css
|   |   |   |   |   |       getting-screened.component.html
|   |   |   |   |   |       getting-screened.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---not-getting-screened
|   |   |   |   |           not-getting-screened.component.css
|   |   |   |   |           not-getting-screened.component.html
|   |   |   |   |           not-getting-screened.component.ts
|   |   |   |   |           
|   |   |   |   +---discussion-questions
|   |   |   |   |       discussion-questions.component.css
|   |   |   |   |       discussion-questions.component.html
|   |   |   |   |       discussion-questions.component.ts
|   |   |   |   |       
|   |   |   |   \---factors
|   |   |   |           factors.component.css
|   |   |   |           factors.component.html
|   |   |   |           factors.component.ts
|   |   |   |           
|   |   |   \---views
|   |   |       \---best-choice
|   |   |               best-choice.component.css
|   |   |               best-choice.component.html
|   |   |               best-choice.component.ts
|   |   |               
|   |   +---diagnosis-treatment
|   |   |   |   diagnosis-treatment-routing.module.ts
|   |   |   |   diagnosis-treatment.module.ts
|   |   |   |   
|   |   |   +---components
|   |   |   |   +---additional-tests
|   |   |   |   |   |   additional-tests.component.css
|   |   |   |   |   |   additional-tests.component.html
|   |   |   |   |   |   additional-tests.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---additional-tests-home
|   |   |   |   |   |       additional-tests-home.component.css
|   |   |   |   |   |       additional-tests-home.component.html
|   |   |   |   |   |       additional-tests-home.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---biopsy
|   |   |   |   |   |       biopsy.component.css
|   |   |   |   |   |       biopsy.component.html
|   |   |   |   |   |       biopsy.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---blood-urine-test
|   |   |   |   |   |       blood-urine-test.component.css
|   |   |   |   |   |       blood-urine-test.component.html
|   |   |   |   |   |       blood-urine-test.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---magnetic-resonance-imaging
|   |   |   |   |   |       magnetic-resonance-imaging.component.css
|   |   |   |   |   |       magnetic-resonance-imaging.component.html
|   |   |   |   |   |       magnetic-resonance-imaging.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---transrectal-ultrasound-test
|   |   |   |   |           transrectal-ultrasound-test.component.css
|   |   |   |   |           transrectal-ultrasound-test.component.html
|   |   |   |   |           transrectal-ultrasound-test.component.ts
|   |   |   |   |           
|   |   |   |   +---decision
|   |   |   |   |   |   decision.component.css
|   |   |   |   |   |   decision.component.html
|   |   |   |   |   |   decision.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---active-treatment
|   |   |   |   |   |       active-treatment.component.css
|   |   |   |   |   |       active-treatment.component.html
|   |   |   |   |   |       active-treatment.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---decision-home
|   |   |   |   |   |       decision-home.component.css
|   |   |   |   |   |       decision-home.component.html
|   |   |   |   |   |       decision-home.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---talk-to-your-doctor
|   |   |   |   |   |       talk-to-your-doctor.component.css
|   |   |   |   |   |       talk-to-your-doctor.component.html
|   |   |   |   |   |       talk-to-your-doctor.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---watch-and-wait
|   |   |   |   |           watch-and-wait.component.css
|   |   |   |   |           watch-and-wait.component.html
|   |   |   |   |           watch-and-wait.component.ts
|   |   |   |   |           
|   |   |   |   +---diagnosis
|   |   |   |   |       diagnosis.component.css
|   |   |   |   |       diagnosis.component.html
|   |   |   |   |       diagnosis.component.ts
|   |   |   |   |       
|   |   |   |   +---diagnosis-treatment-credits
|   |   |   |   |       diagnosis-treatment-credits.component.css
|   |   |   |   |       diagnosis-treatment-credits.component.html
|   |   |   |   |       diagnosis-treatment-credits.component.ts
|   |   |   |   |       
|   |   |   |   +---diagnosis-treatment-preferences
|   |   |   |   |       diagnosis-treatment-preferences.component.css
|   |   |   |   |       diagnosis-treatment-preferences.component.html
|   |   |   |   |       diagnosis-treatment-preferences.component.ts
|   |   |   |   |       
|   |   |   |   +---diagnosis-treatment-summary
|   |   |   |   |       diagnosis-treatment-summary.component.css
|   |   |   |   |       diagnosis-treatment-summary.component.html
|   |   |   |   |       diagnosis-treatment-summary.component.ts
|   |   |   |   |       
|   |   |   |   +---diagnosis-treatment-title
|   |   |   |   |       diagnosis-treatment-title.component.css
|   |   |   |   |       diagnosis-treatment-title.component.html
|   |   |   |   |       diagnosis-treatment-title.component.ts
|   |   |   |   |       
|   |   |   |   \---treatment
|   |   |   |       |   treatment.component.css
|   |   |   |       |   treatment.component.html
|   |   |   |       |   treatment.component.ts
|   |   |   |       |   
|   |   |   |       +---treatment-home
|   |   |   |       |       treatment-home.component.css
|   |   |   |       |       treatment-home.component.html
|   |   |   |       |       treatment-home.component.ts
|   |   |   |       |       
|   |   |   |       +---treatment-may-be-some-problem
|   |   |   |       |       treatment-may-be-some-problem.component.css
|   |   |   |       |       treatment-may-be-some-problem.component.html
|   |   |   |       |       treatment-may-be-some-problem.component.ts
|   |   |   |       |       
|   |   |   |       +---treatment-no-problem
|   |   |   |       |       treatment-no-problem.component.css
|   |   |   |       |       treatment-no-problem.component.html
|   |   |   |       |       treatment-no-problem.component.ts
|   |   |   |       |       
|   |   |   |       \---treatment-serious-problem
|   |   |   |               treatment-serious-problem.component.css
|   |   |   |               treatment-serious-problem.component.html
|   |   |   |               treatment-serious-problem.component.ts
|   |   |   |               
|   |   |   \---views
|   |   |       \---diagnosis-treatment
|   |   |               diagnosis-treatment.component.css
|   |   |               diagnosis-treatment.component.html
|   |   |               diagnosis-treatment.component.ts
|   |   |               
|   |   +---home
|   |   |   |   home-routing.module.ts
|   |   |   |   home.module.ts
|   |   |   |   
|   |   |   \---views
|   |   |       \---home
|   |   |               home.component.css
|   |   |               home.component.html
|   |   |               home.component.ts
|   |   |               
|   |   +---prostate-importance
|   |   |   |   prostate-importance-routing.module.ts
|   |   |   |   prostate-importance.module.ts
|   |   |   |   
|   |   |   +---components
|   |   |   |   +---common-problems
|   |   |   |   |   |   common-problems.component.css
|   |   |   |   |   |   common-problems.component.html
|   |   |   |   |   |   common-problems.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---common-problems-home
|   |   |   |   |   |       common-problems-home.component.css
|   |   |   |   |   |       common-problems-home.component.html
|   |   |   |   |   |       common-problems-home.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---enlarged-prostate
|   |   |   |   |   |       enlarged-prostate.component.css
|   |   |   |   |   |       enlarged-prostate.component.html
|   |   |   |   |   |       enlarged-prostate.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---inflammation
|   |   |   |   |   |       inflammation.component.css
|   |   |   |   |   |       inflammation.component.html
|   |   |   |   |   |       inflammation.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---tumors-cancer
|   |   |   |   |           tumors-cancer.component.css
|   |   |   |   |           tumors-cancer.component.html
|   |   |   |   |           tumors-cancer.component.ts
|   |   |   |   |           
|   |   |   |   +---doctor-visit
|   |   |   |   |       doctor-visit.component.css
|   |   |   |   |       doctor-visit.component.html
|   |   |   |   |       doctor-visit.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-exams
|   |   |   |   |   |   prostate-exams.component.css
|   |   |   |   |   |   prostate-exams.component.html
|   |   |   |   |   |   prostate-exams.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---digital-rectal-exam
|   |   |   |   |   |       digital-rectal-exam.component.css
|   |   |   |   |   |       digital-rectal-exam.component.html
|   |   |   |   |   |       digital-rectal-exam.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---prostate-exams-home
|   |   |   |   |   |       prostate-exams-home.component.css
|   |   |   |   |   |       prostate-exams-home.component.html
|   |   |   |   |   |       prostate-exams-home.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---prostate-specific-antigen
|   |   |   |   |           prostate-specific-antigen.component.css
|   |   |   |   |           prostate-specific-antigen.component.html
|   |   |   |   |           prostate-specific-antigen.component.ts
|   |   |   |   |           
|   |   |   |   +---prostate-importance-credits
|   |   |   |   |       prostate-importance-credits.component.css
|   |   |   |   |       prostate-importance-credits.component.html
|   |   |   |   |       prostate-importance-credits.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-importance-preferences
|   |   |   |   |       prostate-importance-preferences.component.css
|   |   |   |   |       prostate-importance-preferences.component.html
|   |   |   |   |       prostate-importance-preferences.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-importance-summary
|   |   |   |   |       prostate-importance-summary.component.css
|   |   |   |   |       prostate-importance-summary.component.html
|   |   |   |   |       prostate-importance-summary.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-importance-title
|   |   |   |   |       prostate-importance-title.component.css
|   |   |   |   |       prostate-importance-title.component.html
|   |   |   |   |       prostate-importance-title.component.ts
|   |   |   |   |       
|   |   |   |   +---symptoms
|   |   |   |   |   |   symptoms.component.css
|   |   |   |   |   |   symptoms.component.html
|   |   |   |   |   |   symptoms.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---common-symptoms
|   |   |   |   |   |       common-symptoms.component.css
|   |   |   |   |   |       common-symptoms.component.html
|   |   |   |   |   |       common-symptoms.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---urine-related
|   |   |   |   |           urine-related.component.css
|   |   |   |   |           urine-related.component.html
|   |   |   |   |           urine-related.component.ts
|   |   |   |   |           
|   |   |   |   \---what-is-prostate
|   |   |   |           what-is-prostate.component.css
|   |   |   |           what-is-prostate.component.html
|   |   |   |           what-is-prostate.component.ts
|   |   |   |           
|   |   |   \---views
|   |   |       \---prostate-importance
|   |   |               prostate-importance.component.css
|   |   |               prostate-importance.component.html
|   |   |               prostate-importance.component.ts
|   |   |               
|   |   +---prostate-screening
|   |   |   |   prostate-screening-routing.module.ts
|   |   |   |   prostate-screening.module.ts
|   |   |   |   
|   |   |   +---components
|   |   |   |   +---choices
|   |   |   |   |   |   choices.component.css
|   |   |   |   |   |   choices.component.html
|   |   |   |   |   |   choices.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---best-choice
|   |   |   |   |   |       best-choice.component.css
|   |   |   |   |   |       best-choice.component.html
|   |   |   |   |   |       best-choice.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---shared-decision-making
|   |   |   |   |           shared-decision-making.component.css
|   |   |   |   |           shared-decision-making.component.html
|   |   |   |   |           shared-decision-making.component.ts
|   |   |   |   |           
|   |   |   |   +---prostate-screening-credits
|   |   |   |   |       prostate-screening-credits.component.css
|   |   |   |   |       prostate-screening-credits.component.html
|   |   |   |   |       prostate-screening-credits.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-screening-preferences
|   |   |   |   |       prostate-screening-preferences.component.css
|   |   |   |   |       prostate-screening-preferences.component.html
|   |   |   |   |       prostate-screening-preferences.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-screening-summary
|   |   |   |   |       prostate-screening-summary.component.css
|   |   |   |   |       prostate-screening-summary.component.html
|   |   |   |   |       prostate-screening-summary.component.ts
|   |   |   |   |       
|   |   |   |   +---prostate-screening-title
|   |   |   |   |       prostate-screening-title.component.css
|   |   |   |   |       prostate-screening-title.component.html
|   |   |   |   |       prostate-screening-title.component.ts
|   |   |   |   |       
|   |   |   |   +---screening
|   |   |   |   |   |   screening.component.css
|   |   |   |   |   |   screening.component.html
|   |   |   |   |   |   screening.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---cancer-screening
|   |   |   |   |   |       cancer-screening.component.css
|   |   |   |   |   |       cancer-screening.component.html
|   |   |   |   |   |       cancer-screening.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---screening-for-cancer
|   |   |   |   |   |       screening-for-cancer.component.css
|   |   |   |   |   |       screening-for-cancer.component.html
|   |   |   |   |   |       screening-for-cancer.component.ts
|   |   |   |   |   |       
|   |   |   |   |   \---screening-test
|   |   |   |   |           screening-test.component.css
|   |   |   |   |           screening-test.component.html
|   |   |   |   |           screening-test.component.ts
|   |   |   |   |           
|   |   |   |   +---steps
|   |   |   |   |   |   steps.component.css
|   |   |   |   |   |   steps.component.html
|   |   |   |   |   |   steps.component.ts
|   |   |   |   |   |   
|   |   |   |   |   +---step-one
|   |   |   |   |   |       step-one.component.css
|   |   |   |   |   |       step-one.component.html
|   |   |   |   |   |       step-one.component.ts
|   |   |   |   |   |       
|   |   |   |   |   +---step-three
|   |   |   |   |   |   +---abnormal-results
|   |   |   |   |   |   |       abnormal-results.component.css
|   |   |   |   |   |   |       abnormal-results.component.html
|   |   |   |   |   |   |       abnormal-results.component.ts
|   |   |   |   |   |   |       
|   |   |   |   |   |   +---discussing-results
|   |   |   |   |   |   |       discussing-results.component.css
|   |   |   |   |   |   |       discussing-results.component.html
|   |   |   |   |   |   |       discussing-results.component.ts
|   |   |   |   |   |   |       
|   |   |   |   |   |   \---referral-to-urologist
|   |   |   |   |   |           referral-to-urologist.component.css
|   |   |   |   |   |           referral-to-urologist.component.html
|   |   |   |   |   |           referral-to-urologist.component.ts
|   |   |   |   |   |           
|   |   |   |   |   +---step-two
|   |   |   |   |   |   +---accuracy-psa-test
|   |   |   |   |   |   |       accuracy-psa-test.component.css
|   |   |   |   |   |   |       accuracy-psa-test.component.html
|   |   |   |   |   |   |       accuracy-psa-test.component.ts
|   |   |   |   |   |   |       
|   |   |   |   |   |   +---example-psa-test
|   |   |   |   |   |   |       example-psa-test.component.css
|   |   |   |   |   |   |       example-psa-test.component.html
|   |   |   |   |   |   |       example-psa-test.component.ts
|   |   |   |   |   |   |       
|   |   |   |   |   |   \---get-the-results
|   |   |   |   |   |           get-the-results.component.css
|   |   |   |   |   |           get-the-results.component.html
|   |   |   |   |   |           get-the-results.component.ts
|   |   |   |   |   |           
|   |   |   |   |   \---steps-home
|   |   |   |   |           steps-home.component.css
|   |   |   |   |           steps-home.component.html
|   |   |   |   |           steps-home.component.ts
|   |   |   |   |           
|   |   |   |   +---stories
|   |   |   |   |       stories.component.css
|   |   |   |   |       stories.component.html
|   |   |   |   |       stories.component.ts
|   |   |   |   |       
|   |   |   |   \---studies
|   |   |   |           studies.component.css
|   |   |   |           studies.component.html
|   |   |   |           studies.component.ts
|   |   |   |           
|   |   |   \---views
|   |   |       \---prostate-screening
|   |   |               prostate-screening.component.css
|   |   |               prostate-screening.component.html
|   |   |               prostate-screening.component.ts
|   |   |               
|   |   \---risks-symptoms
|   |       |   risks-symptoms-routing.module.ts
|   |       |   risks-symptoms.module.ts
|   |       |   
|   |       +---components
|   |       |   +---am-i-at-risk
|   |       |   |       am-i-at-risk.component.css
|   |       |   |       am-i-at-risk.component.html
|   |       |   |       am-i-at-risk.component.ts
|   |       |   |       
|   |       |   +---learn-symptoms
|   |       |   |   |   learn-symptoms.component.css
|   |       |   |   |   learn-symptoms.component.html
|   |       |   |   |   learn-symptoms.component.ts
|   |       |   |   |   
|   |       |   |   +---symptoms-common
|   |       |   |   |       symptoms-common.component.css
|   |       |   |   |       symptoms-common.component.html
|   |       |   |   |       symptoms-common.component.ts
|   |       |   |   |       
|   |       |   |   +---symptoms-none
|   |       |   |   |       symptoms-none.component.css
|   |       |   |   |       symptoms-none.component.html
|   |       |   |   |       symptoms-none.component.ts
|   |       |   |   |       
|   |       |   |   +---symptoms-other
|   |       |   |   |       symptoms-other.component.css
|   |       |   |   |       symptoms-other.component.html
|   |       |   |   |       symptoms-other.component.ts
|   |       |   |   |       
|   |       |   |   \---what-to-do
|   |       |   |           what-to-do.component.css
|   |       |   |           what-to-do.component.html
|   |       |   |           what-to-do.component.ts
|   |       |   |           
|   |       |   +---prostate-cancer-knowledge
|   |       |   |       prostate-cancer-knowledge.component.css
|   |       |   |       prostate-cancer-knowledge.component.html
|   |       |   |       prostate-cancer-knowledge.component.ts
|   |       |   |       
|   |       |   +---risk-factors
|   |       |   |   |   risk-factors.component.css
|   |       |   |   |   risk-factors.component.html
|   |       |   |   |   risk-factors.component.ts
|   |       |   |   |   
|   |       |   |   +---age
|   |       |   |   |       age.component.css
|   |       |   |   |       age.component.html
|   |       |   |   |       age.component.ts
|   |       |   |   |       
|   |       |   |   +---family-history
|   |       |   |   |       family-history.component.css
|   |       |   |   |       family-history.component.html
|   |       |   |   |       family-history.component.ts
|   |       |   |   |       
|   |       |   |   +---race
|   |       |   |   |       race.component.css
|   |       |   |   |       race.component.html
|   |       |   |   |       race.component.ts
|   |       |   |   |       
|   |       |   |   \---risk-factors-home
|   |       |   |           risk-factors-home.component.css
|   |       |   |           risk-factors-home.component.html
|   |       |   |           risk-factors-home.component.ts
|   |       |   |           
|   |       |   +---risk-symptoms-preferences
|   |       |   |       risk-symptoms-preferences.component.css
|   |       |   |       risk-symptoms-preferences.component.html
|   |       |   |       risk-symptoms-preferences.component.ts
|   |       |   |       
|   |       |   +---risks-symptoms-credits
|   |       |   |       risks-symptoms-credits.component.css
|   |       |   |       risks-symptoms-credits.component.html
|   |       |   |       risks-symptoms-credits.component.ts
|   |       |   |       
|   |       |   +---risks-symptoms-summary
|   |       |   |       risks-symptoms-summary.component.css
|   |       |   |       risks-symptoms-summary.component.html
|   |       |   |       risks-symptoms-summary.component.ts
|   |       |   |       
|   |       |   \---risks-symptoms-title
|   |       |           risks-symptoms-title.component.css
|   |       |           risks-symptoms-title.component.html
|   |       |           risks-symptoms-title.component.ts
|   |       |           
|   |       \---views
|   |           \---risks-symptoms
|   |                   risks-symptoms.component.css
|   |                   risks-symptoms.component.html
|   |                   risks-symptoms.component.ts
|   |                   
|   \---shared
|       |   shared.module.ts
|       |   
|       +---components
|       |   +---feature-credits
|       |   |       feature-credits.component.css
|       |   |       feature-credits.component.html
|       |   |       feature-credits.component.ts
|       |   |       
|       |   \---previous-next-buttons
|       |           previous-next-buttons.component.css
|       |           previous-next-buttons.component.html
|       |           previous-next-buttons.component.ts
|       |           
|       \---services
|               vertical-menu.service.ts
|               
+---assets
|   |   .gitkeep
|   |   
|   +---audio
|   |   +---best-choice
|   |   |   +---best-choice-preferences
|   |   |   |       best-choice-preferences.mp3
|   |   |   |       
|   |   |   +---best-choice-summary
|   |   |   |       best-choice-summary.mp3
|   |   |   |       
|   |   |   +---best-choice-title
|   |   |   |       best-choice-title.mp3
|   |   |   |       
|   |   |   +---choices
|   |   |   |       screening-for-you.mp3
|   |   |   |       
|   |   |   +---discussion
|   |   |   |       discussion-questions.mp3
|   |   |   |       
|   |   |   +---factors
|   |   |   |       factors.mp3
|   |   |   |       
|   |   |   \---screening-questions
|   |   |           getting-screened.mp3
|   |   |           not-getting-screened.mp3
|   |   |           
|   |   +---diagnosis-treatment
|   |   |   +---additional-tests
|   |   |   |       additional-tests-home.mp3
|   |   |   |       biopsy.mp3
|   |   |   |       blood-urine-tests.mp3
|   |   |   |       magnetic-resonance-imaging.mp3
|   |   |   |       rectum.mp3
|   |   |   |       transrectal-ultrasound-test.mp3
|   |   |   |       urologist.mp3
|   |   |   |       
|   |   |   +---decision
|   |   |   |       active-treatment.mp3
|   |   |   |       decision-home.mp3
|   |   |   |       psa-dre-biopsy.mp3
|   |   |   |       talk-to-your-doctor.mp3
|   |   |   |       watch-and-wait.mp3
|   |   |   |       
|   |   |   +---diagnosis
|   |   |   |       diagnosis.mp3
|   |   |   |       
|   |   |   +---diagnosis-treatment-preferences
|   |   |   |       diagnosis-treatment-preferences.mp3
|   |   |   |       
|   |   |   +---diagnosis-treatment-summary
|   |   |   |       diagnosis-treatment-summary.mp3
|   |   |   |       
|   |   |   +---diagnosis-treatment-title
|   |   |   |       diagnosis-treatment-title.mp3
|   |   |   |       
|   |   |   \---treatment
|   |   |           prostate-tumor-may-be-some-problem.mp3
|   |   |           prostate-tumor-no-problem.mp3
|   |   |           prostate-tumor-serious-problem.mp3
|   |   |           treatment-home.mp3
|   |   |           tumor.mp3
|   |   |           ways-to-measure-tumor.mp3
|   |   |           
|   |   +---home
|   |   |       home.mp3
|   |   |       
|   |   +---prostate-importance
|   |   |   +---common-problems
|   |   |   |       antibiotic-antiInflammatory.mp3
|   |   |   |       common-problems-home.mp3
|   |   |   |       enlarged-prostate.mp3
|   |   |   |       inflammation.mp3
|   |   |   |       tumors-cancer.mp3
|   |   |   |       urethra.mp3
|   |   |   |       
|   |   |   +---doctor-visit
|   |   |   |       doctor-visit.mp3
|   |   |   |       
|   |   |   +---prostate-exams
|   |   |   |       digital-rectal-exam.mp3
|   |   |   |       prostate-exam-home.mp3
|   |   |   |       prostate-specific-antigen.mp3
|   |   |   |       
|   |   |   +---prostate-importance-preferences
|   |   |   |       prostate-importance-preferences.mp3
|   |   |   |       
|   |   |   +---prostate-importance-summary
|   |   |   |       prostate-importance-summary.mp3
|   |   |   |       
|   |   |   +---prostate-importance-title
|   |   |   |       prostate-importance-title.mp3
|   |   |   |       
|   |   |   +---symptoms
|   |   |   |       common-symptoms.mp3
|   |   |   |       urine-related.mp3
|   |   |   |       
|   |   |   \---what-is-prostate
|   |   |           bladder-rectum.mp3
|   |   |           
|   |   +---prostate-screening
|   |   |   +---choices
|   |   |   |       best-choice.mp3
|   |   |   |       shared-decision-making.mp3
|   |   |   |       
|   |   |   +---prostate-screening-preferences
|   |   |   |       prostate-screening-preferences.mp3
|   |   |   |       
|   |   |   +---prostate-screening-summary
|   |   |   |       prostate-screening-summary.mp3
|   |   |   |       
|   |   |   +---prostate-screening-title
|   |   |   |       prostate-screening-title.mp3
|   |   |   |       
|   |   |   +---screening
|   |   |   |       cancer-screening.mp3
|   |   |   |       psa-impact-studies.mp3
|   |   |   |       screening-for-cancer.mp3
|   |   |   |       screening-test.mp3
|   |   |   |       
|   |   |   +---steps
|   |   |   |       step-one-get-tested.mp3
|   |   |   |       step-one-prostate-exam.mp3
|   |   |   |       step-three-abnormal-results.mp3
|   |   |   |       step-three-discussing-results.mp3
|   |   |   |       step-three-prostatitis.mp3
|   |   |   |       step-three-referral-to-urologist.mp3
|   |   |   |       step-three-urologist.mp3
|   |   |   |       step-threee-density-psa.mp3
|   |   |   |       step-threee-free-psa.mp3
|   |   |   |       step-threee-velocity-psa.mp3
|   |   |   |       step-two-accuracy-psa-test.mp3
|   |   |   |       step-two-example-psa-test.mp3
|   |   |   |       step-two-get-the-results.mp3
|   |   |   |       steps-home.mp3
|   |   |   |       
|   |   |   \---studies
|   |   |           studies.mp3
|   |   |           
|   |   \---risks-symptoms
|   |       +---am-i-at-risk
|   |       |       am-i-at-risk.mp3
|   |       |       
|   |       +---learn-symptoms
|   |       |       common-symptoms.mp3
|   |       |       no-symptoms.mp3
|   |       |       other-symptoms.mp3
|   |       |       what-to-do.mp3
|   |       |       
|   |       +---prostate-cancer-knowledge
|   |       |       prostate-cancer-knowledge.mp3
|   |       |       
|   |       +---risk-factors
|   |       |       age.mp3
|   |       |       family-history.mp3
|   |       |       race.mp3
|   |       |       risk-factors-home.mp3
|   |       |       
|   |       +---risk-symptoms-preferences
|   |       |       risk-symptoms-preferences.mp3
|   |       |       
|   |       +---risks-symptoms-summary
|   |       |       risks-symptoms-summary.mp3
|   |       |       
|   |       \---risks-symptoms-title
|   |               risks-symptoms-title.mp3
|   |               
|   +---img
|   |   +---best-choice
|   |   |   +---decision
|   |   |   |       getting-screened.png
|   |   |   |       
|   |   |   +---discussion
|   |   |   |       discussion-questions.png
|   |   |   |       
|   |   |   \---factors
|   |   |           factors.png
|   |   |           
|   |   +---diagnosis-treatment
|   |   |   +---additional-tests
|   |   |   |       additional-tests-home.png
|   |   |   |       biopsy.png
|   |   |   |       blood-urine-tests.png
|   |   |   |       magnetic-resonance-imaging.png
|   |   |   |       transrectal-ultrasound-test.png
|   |   |   |       
|   |   |   +---decision
|   |   |   |       talk-to-your-doctor.jpg
|   |   |   |       
|   |   |   \---treatment
|   |   |           may-be-some-problem.png
|   |   |           treatment-home.png
|   |   |           
|   |   +---general
|   |   |       logos.png
|   |   |       three-males.png
|   |   |       
|   |   +---prostate-importance
|   |   |   +---common-problems
|   |   |   |       discuss-common-problems.jpg
|   |   |   |       enlarged-prostate.png
|   |   |   |       inflammation.png
|   |   |   |       
|   |   |   +---doctor-visit
|   |   |   |       men.png
|   |   |   |       
|   |   |   \---prostate-exams
|   |   |           screening-test.jpg
|   |   |           
|   |   +---prostate-screening
|   |   |   +---choice
|   |   |   |       best-choice.png
|   |   |   |       shared-decision-making.png
|   |   |   |       
|   |   |   +---screening
|   |   |   |       psa-impact-studies.png
|   |   |   |       
|   |   |   +---steps
|   |   |   |       step-threee-free-psa.png
|   |   |   |       step-threee-psa-density.png
|   |   |   |       step-threee-psa-velocity.png
|   |   |   |       step-two-false-negative-results.png
|   |   |   |       step-two-false-positive-results.png
|   |   |   |       step-two-get-the-results.png
|   |   |   |       steps-home.png
|   |   |   |       
|   |   |   \---studies
|   |   |           studies.png
|   |   |           
|   |   \---risks-symptoms
|   |       +---am-i-at-risk
|   |       |       am-i-at-risk.png
|   |       |       
|   |       +---learn-symptoms
|   |       |       no-symptoms-indian-male.png
|   |       |       no-symptoms-white-male.png
|   |       |       other-symptoms.png
|   |       |       what-to-do.png
|   |       |       
|   |       \---risk-factors
|   |               age.png
|   |               family-history.png
|   |               race-black-male.png
|   |               race-white-male.png
|   |               risk-factors-home.png
|   |               
|   \---video
|       +---best-choice
|       |   \---choices
|       |           prostate-surgery-al.mp4
|       |           prostate-surgery-bob.mp4
|       |           watchful-waiting-allan-story.mp4
|       |           watchful-waiting-john-story.mp4
|       |           
|       +---diagnosis-treatment
|       |   +---decision
|       |   |       decision-home.mp4
|       |   |       
|       |   \---treatment
|       |           prostate-tumor-no-problem.mp4
|       |           prostate-tumor-serious-problem.mp4
|       |           
|       +---prostate-importance
|       |   +---prostate-exams
|       |   |       digital-rectal-exam.mp4
|       |   |       prostate-specific-antigen.mp4
|       |   |       
|       |   +---tumors-cancer
|       |   |       tumors-cancer.mp4
|       |   |       
|       |   \---what-is-prostate
|       |           what-is-prostate.mp4
|       |           
|       +---prostate-screening
|       |   +---steps
|       |   |       step-two-example-psa-test.mp4
|       |   |       
|       |   \---stories
|       |           field-story.mp4
|       |           michael-story.mp4
|       |           
|       \---risks-symptoms
|           +---learn-symptoms
|           |       common-symptoms.mp4
|           |       
|           \---prostate-cancer-knowledge
|                   what-is-cancer.mp4
|                   
\---environments
        environment.prod.ts
        environment.ts
        
