const API_BASE_URL = "your-api";

async function searchTerm() {
    const termInput = document.getElementById("termInput").value.trim().toLowerCase();
    const resultDiv = document.getElementById("result");

    if (!termInput) {
        resultDiv.innerHTML = "<p>Please enter a term.</p>";
        return;
    }

    resultDiv.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(
            `${API_BASE_URL}/term?term=${termInput}`
        );

        if (!response.ok) {
            throw new Error("Term not found");
        }

        const data = await response.json();

        resultDiv.innerHTML = `
            <h2>${capitalize(data.term)}</h2>
            <p><strong>Category:</strong> ${capitalize(data.category)}</p>
            <p><strong>Definition:</strong> ${data.definition}</p>
            <p><strong>Explanation:</strong> ${data.explanation}</p>
            <div class="related-terms">
                <strong>Related terms:</strong>
                ${data.related_terms.join(", ")}
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = "<p>Term not found or error occurred.</p>";
    }
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
