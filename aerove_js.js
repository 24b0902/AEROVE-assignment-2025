const announcements = [
    {
        id: 1,
        date: '2025-01-15',
        message: 'New AI chatbot integration project launched. All team members are invited to contribute.'
    },
    {
        id: 2,
        date: '2025-01-12',
        message: 'Weekly team meeting scheduled for Friday at 2 PM. Please review the project roadmap beforehand.'
    },
    {
        id: 3,
        date: '2025-01-10',
        message: 'Code review process updated. Please check the new guidelines in the team documentation.'
    },
    {
        id: 4,
        date: '2025-01-08',
        message: 'Competetion registration is now open! Team collaboration sessions start next week.'
    }
];

const achievements = [
    {
        id: 1,
        date: '2025-01-14',
        message: 'Successfully deployed the new user authentication system with 99.9% uptime.'
    },
    {
        id: 2,
        date: '2025-01-11',
        message: 'Won first place in the university coding competition with our machine learning project.'
    },
    {
        id: 3,
        date: '2025-01-09',
        message: 'Completed migration of legacy systems to modern cloud infrastructure.'
    },
    {
        id: 4,
        date: '2025-01-07',
        message: 'Reached 1000+ active users on our student portal application.'
    }
];

const teamMembers = [
    {
        id: 2,
        name: 'Anjali',
        role: 'Manager',
        subsystem: 'All',
        fact: 'efknlkfnslkfekk edk wdqkd',
        github: 'https://github.com/sefef',
        linkedin: 'https://linkedin.com/in/segsvg',
        instagram: 'https://instagram.com/gsdfrs'
    },
    {
        id: 3,
        name: 'Jeet',
        role: 'Manager',
        subsystem: 'All',
        fact: 'wknfdewj kefbsj wkef j qlk',
        github: 'https://github.com/sggrsf',
        linkedin: 'https://linkedin.com/in/sdgvf',
        instagram: 'https://instagram.com/easgs'
    },
    {
        id: 4,
        name: 'Jahnavi',
        role: 'Team member',
        subsystem: 'Mechanincal',
        fact: 'eqnkfj wkejfesm fjwef ',
        github: 'https://github.com/efkjksw',
        linkedin: 'https://linkedin.com/in/eqknd',
        instagram: 'https://instagram.com/kensjw'
    },
    {
        id: 5,
        name: 'Rohan',
        role: 'Lead Engineer',
        subsystem: 'Mechanical',
        fact: 'wekjfr wjkebf jef  wje f ',
        github: 'https://github.com/pqefj',
        linkedin: 'https://linkedin.com/in/qenjq',
        instagram: 'https://instagram.com/qedqknf'
    },
    {
        id: 6,
        name: 'Manav',
        role: 'Lead Engineer',
        subsystem: 'Aerodynamics',
        fact: 'je fkjwbed dkwj edq je ',
        github: 'https://github.com/akjdew',
        linkedin: 'https://linkedin.com/in/qwjd ',
        instagram: 'https://instagram.com/jed '
    },
    {
        id: 7,
        name: 'Durva',
        role: 'Team member',
        subsystem: 'Aerodynamics',
        fact: 'ied jqw dkjw ed j d',
        github: 'https://github.com/ajsd',
        linkedin: 'https://linkedin.com/in/qwd ',
        instagram: 'https://instagram.com/dwqjdbj'
    },
    {
        id: 8,
        name: 'Prabhakar',
        role: 'Senior Engineer',
        subsystem: 'Aerodynamics',
        fact: 'qwjdb qkjfqj fbwqjefk',
        github: 'https://github.com/wkjebd',
        linkedin: 'https://linkedin.com/in/qejn',
        instagram: 'https://instagram.com/jewon'
    },
    {
        id: 9,
        name: 'Anushka',
        role: 'Junior Engineer',
        subsystem: 'MPC',
        fact: 'qejkf kjebcfkj jef ac',
        github: 'https://github.com/kjwbdn',
        linkedin: 'https://linkedin.com/in/jeds',
        instagram: 'https://instagram.com/ioeqndq'
    },
    {
        id: 10,
        name: 'Maitreyee',
        role: 'Junior engineer',
        subsystem: 'Electrical',
        fact: 'epifkjw kqjebf jwf f',
        github: 'https://github.com/eqafjbfjb',
        linkedin: 'https://linkedin.com/in/tekjf',
        instagram: 'https://instagram.com/twqidon'
    },
    {
        id: 1,
        name: 'Jainam',
        role: 'OC',
        subsystem: 'All',
        fact: 'wejdbwk dkjd wmdeked',
        github: 'https://github.com/qwdjk',
        linkedin: 'https://linkedin.com/in/lwbd',
        instagram: 'https://instagram.com/jqwd'
    }
];

const tasks = [
    {
        id: 1,
        title: 'Implement user authentication',
        assignee: 'Aekn',
        dueDate: '2024-01-20',
        status: 'todo'
    },
    {
        id: 2,
        title: 'Design dashboard wireframes',
        assignee: 'Sarah',
        dueDate: '2024-01-18',
        status: 'todo'
    },
    {
        id: 3,
        title: 'Set up database schema',
        assignee: 'Michael',
        dueDate: '2024-01-22',
        status: 'todo'
    },
    {
        id: 4,
        title: 'Configure CI/CD pipeline',
        assignee: 'Emma',
        dueDate: '2024-01-25',
        status: 'progress'
    },
    {
        id: 5,
        title: 'Analyze user behavior data',
        assignee: 'Daniel',
        dueDate: '2024-01-19',
        status: 'progress'
    },
    {
        id: 6,
        title: 'Develop mobile app prototype',
        assignee: 'Rupert',
        dueDate: '2024-01-28',
        status: 'progress'
    },
    {
        id: 7,
        title: 'Security audit report',
        assignee: 'Ronald',
        dueDate: '2024-01-15',
        status: 'completed'
    },
    {
        id: 8,
        title: 'Write automated test cases',
        assignee: 'Rachel',
        dueDate: '2024-01-16',
        status: 'completed'
    },
    {
        id: 9,
        title: 'Update project documentation',
        assignee: 'Tom',
        dueDate: '2024-01-17',
        status: 'completed'
    }
];

class TechTeamApp {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupNavigation();
        this.loadHomeContent();
        this.loadTeamContent();
        this.loadTasksContent();
        this.setupTaskDragAndDrop();
        this.typeWriterEffect();
    }

    typeWriterEffect() {
        const title = "Team AeRoVe";
        const element = document.getElementById("typewriter");
        let i = 0;
        
        function type() {
            if (i < title.length) {
                element.innerHTML += title.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                element.style.borderRight = "none";
            }
        }
        
        setTimeout(type, 500);
    }

    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        navButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetPage = e.currentTarget.dataset.page;
                this.navigateToPage(targetPage);
            });
        });
    }

    navigateToPage(page) {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        document.querySelectorAll('.page').forEach(pageEl => {
            pageEl.classList.remove('active');
        });
        document.getElementById(page).classList.add('active');

        this.currentPage = page;
    }

    loadHomeContent() {
        this.loadAnnouncements();
        this.loadAchievements();
    }

    loadAnnouncements() {
        const container = document.getElementById('announcements-list');
        container.innerHTML = '';

        const sortedAnnouncements = [...announcements].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );

        sortedAnnouncements.forEach(announcement => {
            const item = document.createElement('div');
            item.className = 'announcement-item';
            item.innerHTML = `
                <div class="announcement-date">${this.formatDate(announcement.date)}</div>
                <div class="announcement-message">${announcement.message}</div>
            `;
            container.appendChild(item);
        });
    }

    loadAchievements() {
        const container = document.getElementById('achievements-list');
        container.innerHTML = '';

        const sortedAchievements = [...achievements].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );

        sortedAchievements.forEach(achievement => {
            const item = document.createElement('div');
            item.className = 'achievement-item';
            item.innerHTML = `
                <div class="achievement-date">${this.formatDate(achievement.date)}</div>
                <div class="achievement-message">${achievement.message}</div>
            `;
            container.appendChild(item);
        });
    }

    loadTeamContent() {
        const container = document.getElementById('team-grid');
        container.innerHTML = '';

        teamMembers.forEach(member => {
            const card = document.createElement('div');
            card.className = 'team-card';
            card.innerHTML = `
                <div class="team-avatar">${this.getInitials(member.name)}</div>
                <div class="team-name">${member.name}</div>
                <div class="team-role">${member.role} - ${member.subsystem}</div>
                <div class="team-fact">"${member.fact}"</div>
                <div class="team-links">
                    <a href="${member.github}" class="team-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                        </svg>
                    </a>
                    <a href="${member.linkedin}" class="team-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                            <rect x="2" y="9" width="4" height="12"/>
                            <circle cx="4" cy="4" r="2"/>
                        </svg>
                    </a>
                    <a href="${member.instagram}" class="team-link" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                    </a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    loadTasksContent() {
        this.renderTasks();
        this.updateTaskCounts();
    }

    renderTasks() {
        const columns = ['todo', 'progress', 'completed'];
        
        columns.forEach(column => {
            const container = document.getElementById(`${column}-tasks`);
            container.innerHTML = '';

            const columnTasks = tasks.filter(task => task.status === column);
            
            columnTasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = 'task-item';
                taskElement.draggable = true;
                taskElement.dataset.taskId = task.id;
                taskElement.innerHTML = `
                    <div class="task-title">${task.title}</div>
                    <div class="task-assignee">Assigned to: ${task.assignee}</div>
                    <div class="task-due-date">Due: ${this.formatDate(task.dueDate)}</div>
                    <div class="task-controls">
                        ${this.getTaskControls(task.status)}
                    </div>
                `;
                container.appendChild(taskElement);
            });
        });
    }

    getTaskControls(status) {
        let controls = '';
        
        if (status === 'progress') {
            controls += '<button class="task-btn move-left" onclick="app.moveTask(event, \'todo\')">← To Do</button>';
            controls += '<button class="task-btn move-right" onclick="app.moveTask(event, \'completed\')">Complete →</button>';
        } else if (status === 'todo') {
            controls += '<button class="task-btn move-right" onclick="app.moveTask(event, \'progress\')">Start →</button>';
        } else if (status === 'completed') {
            controls += '<button class="task-btn move-left" onclick="app.moveTask(event, \'progress\')">← In Progress</button>';
        }
        
        return controls;
    }

    moveTask(event, newStatus) {
        const taskElement = event.target.closest('.task-item');
        const taskId = parseInt(taskElement.dataset.taskId);
        
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            this.renderTasks();
            this.updateTaskCounts();
        }
    }

    updateTaskCounts() {
        const todoCount = tasks.filter(task => task.status === 'todo').length;
        const progressCount = tasks.filter(task => task.status === 'progress').length;
        const completedCount = tasks.filter(task => task.status === 'completed').length;

        document.getElementById('todo-count').textContent = todoCount;
        document.getElementById('progress-count').textContent = progressCount;
        document.getElementById('completed-count').textContent = completedCount;
    }

    setupTaskDragAndDrop() {
        document.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('task-item')) {
                e.target.classList.add('dragging');
                e.dataTransfer.setData('text/plain', e.target.dataset.taskId);
            }
        });

        document.addEventListener('dragend', (e) => {
            if (e.target.classList.contains('task-item')) {
                e.target.classList.remove('dragging');
            }
        });

        document.addEventListener('dragover', (e) => {
            if (e.target.classList.contains('tasks-list')) {
                e.preventDefault();
            }
        });

        document.addEventListener('drop', (e) => {
            if (e.target.classList.contains('tasks-list')) {
                e.preventDefault();
                const taskId = parseInt(e.dataTransfer.getData('text/plain'));
                const newStatus = e.target.dataset.column;
                
                const task = tasks.find(t => t.id === taskId);
                if (task && task.status !== newStatus) {
                    task.status = newStatus;
                    this.renderTasks();
                    this.updateTaskCounts();
                }
            }
        });
    }

    getInitials(name) {
        return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new TechTeamApp();
});

window.moveTask = (event, newStatus) => {
    window.app.moveTask(event, newStatus);
};