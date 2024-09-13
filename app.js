function hide(articles) {
    for (const article of articles) {
        document.getElementById(article).setAttribute("hidden", "")
    }
}

function show(articles) {
    for (const article of articles) {
        document.getElementById(article).removeAttribute("hidden")
    }
}

function back() {
    hide(['Back', 'Reverse_Tri_Ineq', 'Discrete', 'Norm'])
    show(['Definition', 'hr1', 'Fun_Facts', 'hr2', 'Quiz'])
}

function reverse_tri_ineq() {
    hide(['Discrete', 'Norm', 'Definition', 'hr1', 'Fun_Facts', 'hr2', 'Quiz'])
    show(['Back', 'Reverse_Tri_Ineq'])
}

function discrete() {
    hide(['Reverse_Tri_Ineq', 'Norm', 'Definition', 'hr1', 'Fun_Facts', 'hr2', 'Quiz'])
    show(['Back', 'Discrete'])
}

function norm() {
    hide(['Reverse_Tri_Ineq', 'Discrete', 'Definition', 'hr1', 'Fun_Facts', 'hr2', 'Quiz'])
    show(['Back', 'Norm'])
}

function Q1_correct() {
    document.getElementById("Q1_result").style.color = "green"
    document.getElementById("Q1_result").innerHTML = "Correct! We omitted 'd(x, y) = 0 if and only if x = y' from the positivity property.";
}

function Q1_incorrect() {
    document.getElementById("Q1_result").style.color = "red"
    document.getElementById("Q1_result").innerHTML = "Inorrect. Please try again.";
}

function submit_Q2() {
    var Q2_answer = document.getElementById("Q2_answer").value;
    if (Q2_answer == 1) {
        document.getElementById("Q2_result").style.color = "green"
        document.getElementById("Q2_result").innerHTML = "Correct! Since 0 &#x2260; 5, d(0, 5) = 1.";
    } else {
        document.getElementById("Q2_result").style.color = "red"
        document.getElementById("Q2_result").innerHTML = "Inorrect. Please try again.";
    }
}

function submit_Q3() {
    var Q3_answer = document.getElementById("Q3_answer").value;
    if (Q3_answer == "True") {
        document.getElementById("Q3_result").style.color = "green"
        document.getElementById("Q3_result").innerHTML = "Correct! This is known as the Euclidean metric, and can be given by d((x&#x2080;, y&#x2080;), (x&#x2081;, y&#x2081;)) = &#x2016;(x&#x2080;, y&#x2080;) - (x&#x2081;, y&#x2081;)&#x2016;&#x2082;, where &#x2016;&#x00B7;&#x2016;&#x2082; is the Euclidean norm (i.e. the standard norm on &#x211D;&#xB2;).";
    } else {
        document.getElementById("Q3_result").style.color = "red"
        document.getElementById("Q3_result").innerHTML = "Inorrect. Please try again.";
    }
}