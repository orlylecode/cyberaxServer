package com.cogitech.cyberax.server.repository;

import com.cogitech.cyberax.server.domain.Mise;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Mise entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MiseRepository extends JpaRepository<Mise, Long> {

}
