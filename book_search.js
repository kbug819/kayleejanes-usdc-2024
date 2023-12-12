/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };
    
    for (const scannedText of scannedTextObj) {
        scannedText.Content.forEach(content => {
            if (content.Text.includes(searchTerm)) {
                result.Results.push({
                    "ISBN": scannedText.ISBN,
                    "Page": content.Page,
                    "Line": content.Line
                });
            }
        });
    }

    result.SearchTerm = searchTerm

    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/* Further test setup: */
/* Test setup using 'and': */
const twentyLeaguesTestAnd = {
    "SearchTerm": "and",
    "Results": [
        {
        "ISBN": "9780000528531",
        "Page": 31,
        "Line": 9
    },         {
        "ISBN": "9780000528531",
        "Page": 31,
        "Line": 10
    }]
}

/* Test setup using 'nomatch': */
const twentyLeaguesTestNomatch = {
    "SearchTerm": "nomatch",
    "Results": []
}

/* Test setup using 'The': */
const twentyLeaguesTestThe = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

/* End testing setup */


/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Positive test & verification of multiple results - Second check to verify positive results using 'and'. */
const test3result = findSearchTermInBooks("and", twentyLeaguesIn); 
if (test3result.Results.length == 2) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test3result.Results.length);
}

/** Positive test & verification of multiple results - Length test using 'and' */
const test4result = findSearchTermInBooks("and", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesTestAnd) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesTestAnd);
    console.log("Received:", test4result);
}

/** Negative test - Verification that if no matches are returned, an empty array is present, and 0 matches */
const test5result = findSearchTermInBooks("nomatch", twentyLeaguesIn); 
if (test5result.Results.length == 0) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test5result.Results.length);
}

/** Negative test - Verification that if no matches are returned, an empty array is present, and 0 matches */
const test6result = findSearchTermInBooks("nomatch", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesTestNomatch) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesTestNomatch);
    console.log("Received:", test6result);
}

/** Case-sensitive test - Verification that 'The' returns a response */
const test7result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesTestThe) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", twentyLeaguesTestThe);
    console.log("Received:", test7result);
}

/** Case-sensitive test - Verification that 'The' returns a response with only 1 result */
const test8result = findSearchTermInBooks("The", twentyLeaguesIn); 
if (test8result.Results.length == 1) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", twentyLeaguesTestThe.Results.length);
    console.log("Received:", test8result.Results.length);
}

/** Case-sensitive test - Verification that responses for 'the' and 'The' are not the same and return different results */
const test9result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(test1result) !== JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", twentyLeaguesTestThe);
    console.log("Received:", twentyLeaguesOut);
}