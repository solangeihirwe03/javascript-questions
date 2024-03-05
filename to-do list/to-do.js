function Task(title, description, category) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.completed = false;
  
    this.markCompleted = function() {
      this.completed = true;
    }
  }
  
  function ToDoList() {
    this.tasks = [];
  
    this.addTask = function(title, description, category) {
      const newTask = new Task(title, description, category);
      this.tasks.push(newTask);
    }
  
    this.displayTasks = function() {
      const categories = {};
      for (const task of this.tasks) {
        if (!categories[task.category]) {
          categories[task.category] = [];
        }
        categories[task.category].push(task);
      }
  
      for (const category in categories) {
        console.log(`** Category: ${category} **`);
        for (const task of categories[category]) {
          const status = task.completed ? "Completed" : "Pending";
          console.log(`- ${task.title} (${status}) - ${task.description}`);
        }
        console.log();
      }
    }
  
    this.markTaskCompleted = function(title) {
      for (const task of this.tasks) {
        if (task.title === title) {
          task.markCompleted();
          return;
        }
      }
      console.log(`Task '${title}' not found.`);
    }
  
    this.removeTask = function(title) {
      const index = this.tasks.findIndex((task) => task.title === title);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        return;
      }
      console.log(`Task '${title}' not found.`);
    }
  }
  
  // Example usage
  const todoList = new ToDoList();
  
  todoList.addTask("Learning Javascript", "assignments, practices, questions", "Errands");
  todoList.addTask("Finish report", "Due next week", "Work");
  todoList.addTask("Clean the house", "", "Cooking");
  
  todoList.displayTasks();
  
  todoList.markTaskCompleted("Learning Javascript");
  todoList.removeTask("Finish report");
  
  todoList.displayTasks();