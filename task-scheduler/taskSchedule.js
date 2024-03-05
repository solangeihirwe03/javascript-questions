function Task(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false; // Default status: not completed
  }
  
  function Scheduler() {
    this.tasks = [];
  
    this.addTask = function(title, description, dueDate) {
      const newTask = new Task(title, description, dueDate);
      this.tasks.push(newTask);
    };
  
    this.displayTasks = function() {
      this.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); // Sort by due date
      for (const task of this.tasks) {
        const completionStatus = task.completed ? "Completed" : "not completed";
        console.log(`Title: ${task.title} Description: ${task.description} Due Date: ${task.dueDate} Status: ${completionStatus}`);
      }
    };
  
    this.updateTask = function(taskTitle, newTitle, newDescription, newDueDate) {
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        if (task.title === taskTitle) {
          task.title = newTitle || task.title;
          task.description = newDescription || task.description;
          task.dueDate = newDueDate || task.dueDate;
          console.log(`Task '${taskTitle}' successfully updated.`);
          return;
        }
      }
      console.log(`Task '${taskTitle}' not found.`);
    };
  
    this.markComplete = function(taskTitle) {
      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        if (task.title === taskTitle) {
          task.completed = true;
          console.log(`Task '${taskTitle}' marked as completed.`);
          return;
        }
      }
      console.log(`Task '${taskTitle}' not found.`);
    };
  
    this.removeTask = function(taskTitle) {
      const index = this.tasks.findIndex((task) => task.title === taskTitle);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Task '${taskTitle}' successfully removed.`);
      } else {
        console.log(`Task '${taskTitle}' not found.`);
      }
    };
  }
  
  // Example usage
  const scheduler = new Scheduler();
  
  scheduler.addTask("Finish report", "Complete the monthly sales report", "2024-03-09");
  scheduler.addTask("clothes shopping", "Buy t-shirt, skirts, and trousers", "2024-03-06");
  
  scheduler.displayTasks();
  
  scheduler.updateTask("building website", "learning ", "Buy milk, eggs, and fruits", "2024-03-08");
  scheduler.markComplete("Finish report", "clothes shopping");
  scheduler.removeTask("Finish report");
  
  scheduler.displayTasks();