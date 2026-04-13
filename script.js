// Mobile-optimized functionality
document.addEventListener('DOMContentLoaded', () => {
    // Apply button redirect
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('apply-btn')) {
            e.preventDefault();
            window.open('https://wa.me/qr/IGNPCKFYUQUSJ1', '_blank');
        }
    });

    // Newsletter submission
    const form = document.querySelector('.email-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            alert('Thanks for subscribing!');
            form.reset();
        });
    }

    // Load sample jobs
    loadSampleJobs();
});

function loadSampleJobs() {
    const jobs = [
        { title: "UX Designer", company: "DesignCo", location: "Remote", salary: "₱50k/month" },
        { title: "Content Writer", company: "MediaGroup", location: "PH Only", salary: "₱30k/month" },
        { title: "DevOps Engineer", company: "CloudTech", location: "Remote", salary: "₱80k/month" }
    ];

    const grid = document.querySelector('.jobs-grid');
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>
            <div class="job-meta">
                <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span><i class="fas fa-money-bill-wave"></i> ${job.salary}</span>
            </div>
            <button class="apply-btn">Apply via WhatsApp</button>
        `;
        grid.appendChild(jobCard);
    });
}