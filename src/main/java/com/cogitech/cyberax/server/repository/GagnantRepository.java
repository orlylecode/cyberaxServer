package com.cogitech.cyberax.server.repository;

import com.cogitech.cyberax.server.domain.Gagnant;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Gagnant entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GagnantRepository extends JpaRepository<Gagnant, Long> {

}
