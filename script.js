// Real-Time Preview Update
document.getElementById("name").addEventListener("input", function () {
    document.getElementById("preview-name").textContent = this.value;
});

document.getElementById("job-title").addEventListener("input", function () {
    document.getElementById("preview-job-title").textContent = this.value;
});

document.getElementById("education").addEventListener("input", function () {
    document.getElementById("preview-education").textContent = this.value;
});

document.getElementById("institution").addEventListener("input", function () {
    document.getElementById("preview-institution").textContent = this.value;
});

document.getElementById("experience").addEventListener("input", function () {
    document.getElementById("preview-experience").textContent = this.value;
});

document.getElementById("projects").addEventListener("input", function () {
    document.getElementById("preview-projects").textContent = this.value;
});

document.getElementById("skills").addEventListener("input", function () {
    document.getElementById("preview-skills").textContent = this.value;
});

// Download Resume as PDF with Delay
document.getElementById("downloadBtn").addEventListener("click", function () {
    const resumeContent = document.querySelector(".resume-preview");
    setTimeout(() => {
        html2pdf().from(resumeContent).set({
            margin: 1,
            filename: 'resume.pdf',
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        }).save();
    }, 500); // 500ms delay to ensure final rendering
});
