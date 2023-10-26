import { ModuleMainTabs } from '../../models/module-main-tabs';

export var PROSTATE_IMPORTANCE_MAIN_TAB_DATA: ModuleMainTabs[] = [
    { 
        'href': 'title',   
        'tab': 'titleTab',
        'hasSubTabs': false,
        'subTabCount': 0
    },
    {  
        'href': 'prostate', 
        'tab': 'prostateTab',
        'hasSubTabs': false,
        'subTabCount': 0
    },
    {   
        'href': 'commonProblem', 
        'tab': 'commonProblemTab' ,
        'hasSubTabs': true,
        'subTabCount': 4
    },
    {   
        'href': 'symptoms', 
        'tab': 'symptomsTab' ,
        'hasSubTabs': true,
        'subTabCount': 2
    },
    {   
        'href': 'visit', 
        'tab': 'visitTab',
        'hasSubTabs': false,
        'subTabCount': 0 
    },
    {   
        'href': 'prostateExam', 
        'tab': 'prostateExamTab',
        'hasSubTabs': true,
        'subTabCount': 3
    },
    {   
        'href': 'preferences', 
        'tab': 'preferencesTab',
        'hasSubTabs': false,
        'subTabCount': 0
    },
    {   
        'href': 'summary', 
        'tab': 'summaryTab',
        'hasSubTabs': false,
        'subTabCount': 0 
    },
    {   
        'href': 'credits', 
        'tab': 'creditsTab',
        'hasSubTabs': false,
        'subTabCount': 0
    }
];