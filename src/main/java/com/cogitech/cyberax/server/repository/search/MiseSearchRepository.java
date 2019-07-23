package com.cogitech.cyberax.server.repository.search;

import com.cogitech.cyberax.server.domain.Mise;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Mise} entity.
 */
public interface MiseSearchRepository extends ElasticsearchRepository<Mise, Long> {
}
