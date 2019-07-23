package com.cogitech.cyberax.server.repository.search;

import com.cogitech.cyberax.server.domain.Joueur;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Joueur} entity.
 */
public interface JoueurSearchRepository extends ElasticsearchRepository<Joueur, Long> {
}
