package angeles_de_ronny.c4g.anglesDeRonny.controllers;

import angeles_de_ronny.c4g.anglesDeRonny.entities.User;
import angeles_de_ronny.c4g.anglesDeRonny.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class UserController {

    private final UserService userService;
    @Autowired
    public UserController(@Qualifier("userService") UserService userService) {
        this.userService = userService;
    }

    @PutMapping("/user/new")
    public User newUser(@RequestBody @Valid User aUser){
        return userService.create(aUser);
    }

    @GetMapping("/user/{id}/show")
    public User showUser(@PathVariable("id") long id){
        return userService.get(id);
    }

    @PostMapping("/user/edit")
    public User editUser(@RequestBody @Valid User aUser){
        return userService.edit(aUser);
    }

    @DeleteMapping("/user/{id}/delete")
    public void deleteUser(@PathVariable("id") long id){
        userService.delete(id);
    }

    @GetMapping("/users")
    public List<User> listUser(){
        return userService.getAll();
    }
}
