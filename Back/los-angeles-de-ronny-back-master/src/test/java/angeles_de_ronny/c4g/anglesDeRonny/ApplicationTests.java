package angeles_de_ronny.c4g.anglesDeRonny;

import angeles_de_ronny.c4g.anglesDeRonny.repositories.UserDAO;
import angeles_de_ronny.c4g.anglesDeRonny.entities.User;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {

	@Autowired
	private UserDAO userDAO;

	@Test
	public void simpleTest(){
		assertThat(true).isTrue();
	}

	@Test
	public void saveAUser(){
		User user = new User("Fede", "El", "Mas@Capo.com", 12345678);
		userDAO.save(user);
		assertThat(userDAO.findAll()).isNotEmpty();
	}

	@After
	public void delete(){
		userDAO.deleteAll();
	}

}
