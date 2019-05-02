package angeles_de_ronny.c4g.anglesDeRonny.services;

import angeles_de_ronny.c4g.anglesDeRonny.exceptions.UserNotFoundException;
import angeles_de_ronny.c4g.anglesDeRonny.repositories.UserDAO;
import angeles_de_ronny.c4g.anglesDeRonny.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Component("userService")
@Transactional
public class UserService {

    private final UserDAO userDao;

    @Autowired
    public UserService(@Qualifier("userDao") UserDAO userDao) {
        this.userDao = userDao;
    }

    public User create(User aUser) {
        return userDao.save(aUser);
    }

    public User get(long id) {
        Optional<User> user = userDao.findById(id);
        if(!user.isPresent()){
            throw new UserNotFoundException("User with id:" + id + " not found" );
        }
        return user.get();
    }

    public User edit(User aUser) {
        this.get(aUser.getId());
        return userDao.save(aUser);
    }

    public void delete(long id) {
        this.get(id);
        this.userDao.deleteById(id);
    }

    public List<User> getAll() {
        return this.userDao.findAll();
    }
}
