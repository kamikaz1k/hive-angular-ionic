var app = angular.module('hive.services',[]);

app.factory('HiveServices', ['$q', '$log', function($q, $log) {

    var service = {};

    function getGlossary1(){
        var glossary = [
            { abbreviation: "ADRC", definition: "Average Daily Remuneration Costs" },
            { abbreviation: "ADRC21", definition: "Average Daily Remuneration Costs normalized to 21 Working Days per Month" },
            { abbreviation: "ARVE", definition: "Assignment Rate Vacation Excluded" },
            { abbreviation: "ARVI", definition: "Assignment Rate Vacation Included" },
            { abbreviation: "B2B", definition: "Book to Bill Rate" },
            { abbreviation: "BCS", definition: "Bid Control Sheet" },
            { abbreviation: "BD(C)", definition: "Business Development (Costs)" },
            { abbreviation: "BIA", definition: "Billed In Advance" },
            { abbreviation: "BTU", definition: "Business Time Units" },
            { abbreviation: "CER", definition: "Central Expense Reporting" },
            { abbreviation: "CF", definition: "Cash Flow" },
            { abbreviation: "CMA", definition: "Corporate Managed Account" },
            { abbreviation: "COR", definition: "Charge Out Rate" },
            { abbreviation: "COS", definition: "Contribution Own Staff" },
            { abbreviation: "CP", definition: "Contribution Purchased" },
            { abbreviation: "CR", definition: "Cost Rate" },
            { abbreviation: "CSS", definition: "Client Serving Staff" },
            { abbreviation: "CTR", definition: "Central Time Reporting" },
            { abbreviation: "Costed", definition: "Billable Travel Expenses" },
            { abbreviation: "DC", definition: "Direct Costs" },
            { abbreviation: "DM", definition: "Delivery Manager" },
            { abbreviation: "DOR", definition: "Days Outstanding Receivables" },
            { abbreviation: "DQM", definition: "Delivery and Quality Manager" },
            { abbreviation: "DSP", definition: "Dedicated Sales Person" },
            { abbreviation: "DSS", definition: "Dedicated Support Staff" },
            { abbreviation: "DVI", definition: "Delivery Value Improvement" },
            { abbreviation: "EM", definition: "Engagement Manager (Project Manager)" },
            { abbreviation: "ETC", definition: "Estimate To Completion" },
            { abbreviation: "FTE", definition: "Full Time Equivalent" },
            { abbreviation: "GDC", definition: "Global Delivery Center" },
            { abbreviation: "GFS", definition: "Global Financial System (also: Global Financial Services)" },
            { abbreviation: "GM", definition: "General Management (new version of NOP)" },
            { abbreviation: "GOP", definition: "Gross Operating Profit" },
            { abbreviation: "GOU", definition: "Group of Units" },
            { abbreviation: "HR", definition: "Human Resources" },
            { abbreviation: "IDC", definition: "Indirect Costs" },
            { abbreviation: "L&D", definition: "Learning & Development" },
            { abbreviation: "LOI", definition: "Letter Of Intent" },
            { abbreviation: "N2K", definition: "Need To Know" },
            { abbreviation: "NOP", definition: "New Operating Program" },
            { abbreviation: "OAV", definition: "Operational Added Value" },
            { abbreviation: "OH", definition: "Overhead" },
            { abbreviation: "PL", definition: "Production Loss" }];

        return glossary;
    }

    function getGlossary(){
        var glossary = getGlossary1();
        var glossary2 = [
            { abbreviation: "POC", definition: "Percentage of Completion" },
            { abbreviation: "PPT", definition: "Personal Productivity Tools" },
            { abbreviation: "PRM", definition: "People Relationship Management" },
            { abbreviation: "PROR", definition: "Productivity Rate" },
            { abbreviation: "PT", definition: "Paid Time" },
            { abbreviation: "PTD", definition: "Project To Date" },
            { abbreviation: "PV", definition: "Paid Vacation" },
            { abbreviation: "Posted", definition: "Submitted Travel Expenses" },
            { abbreviation: "RC", definition: "Restructuring Costs" },
            { abbreviation: "RM", definition: "Risk Management" },
            { abbreviation: "ROS", definition: "Revenue Own Staff" },
            { abbreviation: "SBU", definition: "Strategic Business Unit" },
            { abbreviation: "SBU", definition: "(Sales) Selling Business Unit (Spade)" },
            { abbreviation: "SFC", definition: "Support Function Costs" },
            { abbreviation: "TBE", definition: "Time Booked to Engagement" },
            { abbreviation: "TBEV", definition: "Time Booked to Engagement and Valorized" },
            { abbreviation: "TLI", definition: "Top Line Initiative" },
            { abbreviation: "URVE", definition: "Utilization Rate Vacation Excluded" },
            { abbreviation: "URVI", definition: "Utilization Rate Vacation Included" },
            { abbreviation: "WIP", definition: "Work In Progress" },
            { abbreviation: "WT", definition: "Working Time" },
            { abbreviation: "YEL", definition: "Year End Likely" },
            { abbreviation: "YTD", definition: "Year To Date" }
            ];

        glossary = glossary.concat(glossary2);

        return glossary;
    }

    service.getGlossary = getGlossary;
    return service;

}]);




