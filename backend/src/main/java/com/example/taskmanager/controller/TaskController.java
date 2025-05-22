package com.example.taskmanager.controller;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.example.taskmanager.model.Task;
import com.example.taskmanager.service.TaskService;

@Controller
@RequestMapping("/tasks")
public class TaskController {
  private final TaskService svc;
  public TaskController(TaskService svc){this.svc=svc;}

  @GetMapping("/")
   public String home() {
   return "redirect:/tasks";
   }

  @GetMapping
  public String list(Model m){m.addAttribute("tasks",svc.findAll());return "tasks/list";}

  @GetMapping("/new")
  public String form(Model m){m.addAttribute("task",new Task());return "tasks/form";}

  @PostMapping
  public String save(@ModelAttribute Task t){svc.save(t);return "redirect:/tasks";}

  @GetMapping("/edit/{id}")
  public String edit(@PathVariable Long id,Model m){m.addAttribute("task",svc.findById(id));return "tasks/form";}

  @GetMapping("/delete/{id}")
  public String delete(@PathVariable Long id){svc.delete(id);return "redirect:/tasks";}
}