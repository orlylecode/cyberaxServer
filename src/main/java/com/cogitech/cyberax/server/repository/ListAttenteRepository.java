package com.cogitech.cyberax.server.repository;

import com.cogitech.cyberax.server.domain.ListAttente;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ListAttente entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ListAttenteRepository extends JpaRepository<ListAttente, Long> {

}
