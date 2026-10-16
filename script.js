
const helpArea = document.getElementById("help-area");

const guides = {
    portal: {
        title: "Portal Not Working",
        question: "What happens when you open the portal?",
        options: [
            {
                label: "The portal does not open",
                answer: "Check your internet connection, refresh the page, and try another browser. If the portal still fails, contact ICT support."
            },
            {
                label: "The portal is very slow",
                answer: "Try refreshing the page, closing unnecessary tabs, and checking your connection. If many students have the same problem, report it to ICT support."
            },
            {
                label: "I cannot log in",
                answer: "Check your username and password. If you forgot your password, use the official password-reset option. Never share your password with anyone."
            }
        ]
    },

    results: {
        title: "Examination Results",
        question: "What problem are you experiencing?",
        options: [
            {
                label: "My results are missing",
                answer: "Check whether results have been published. If they are available but missing from your account, contact your academic office with your course and unit details."
            },
            {
                label: "My marks are incorrect",
                answer: "Compare the displayed marks with your official records. Submit a result-query request through the approved university process. Do not attempt to change the marks yourself."
            },
            {
                label: "My results are not loading",
                answer: "Refresh the page and try again later. If the problem continues, record the error message and contact ICT support."
            }
        ]
    },

    fees: {
        title: "Fees and Payments",
        question: "What payment problem do you have?",
        options: [
            {
                label: "I have paid, but the portal has not updated",
                answer: "Keep your payment confirmation and transaction reference. Check the official payment status, then contact the finance office if the payment remains missing. Do not pay again until the transaction is checked."
            },
            {
                label: "My fee balance is incorrect",
                answer: "Open your fee statement and compare the listed charges and payments with your receipts. Contact the finance office to request reconciliation of the balance."
            },
            {
                label: "My payment failed",
                answer: "Check the transaction status with your payment provider and review the official payment instructions. If money was deducted, contact the provider and finance office before retrying."
            }
        ]
    },

    registration: {
        title: "Unit Registration",
        question: "What registration problem are you facing?",
        options: [
            {
                label: "I cannot register a unit",
                answer: "Check the registration deadline, your course requirements and any prerequisites. If you still cannot register, contact your academic department."
            },
            {
                label: "A unit is missing",
                answer: "Confirm that the unit belongs to your programme and current semester. Contact your department if an eligible unit is missing."
            },
            {
                label: "I receive an error message",
                answer: "Read and record the error message. Check for timetable clashes, unmet prerequisites or incomplete registration requirements, then contact ICT support if needed."
            }
        ]
    }
};

function startHelp(category) {
    const guide = guides[category];

    helpArea.innerHTML = `
        <h2>${guide.title}</h2>
        <p>${guide.question}</p>
        <div id="answer-options"></div>
        <div id="solution" aria-live="polite"></div>
        <button onclick="showHome()">Back to Help Topics</button>
    `;

    const options = document.getElementById("answer-options");

    guide.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option.label;

        button.onclick = () => showSolution(category, index);

        options.appendChild(button);
    });
}

function showSolution(category, index) {
    const option = guides[category].options[index];
    const solution = document.getElementById("solution");

    solution.innerHTML = "";

    const heading = document.createElement("h3");
    heading.textContent = "Recommended Steps";
    solution.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = option.answer;
    solution.appendChild(paragraph);

    const followUp = document.createElement("p");
    followUp.textContent = "Did this solve your problem?";
    solution.appendChild(followUp);

    const yesButton = document.createElement("button");
    yesButton.textContent = "Yes, problem solved";
    yesButton.onclick = () => {
        solution.innerHTML =
            "<h3>Great!</h3><p>You can return to the help topics if you need more assistance.</p>";
    };
    solution.appendChild(yesButton);

    const noButton = document.createElement("button");
    noButton.textContent = "No, I still need help";
    noButton.onclick = () => {
        solution.innerHTML =
            "<h3>Further Assistance</h3><p>Record the problem and contact your university's official ICT, finance or academic support office, depending on the issue.</p>";
    };
    solution.appendChild(noButton);
}

function showHome() {
    helpArea.innerHTML = `
        <h2>Student Support Guide</h2>
        <p>Select a problem above to get started.</p>
    `;
}
