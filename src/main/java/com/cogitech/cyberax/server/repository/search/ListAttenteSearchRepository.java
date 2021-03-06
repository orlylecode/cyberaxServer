package com.cogitech.cyberax.server.repository.search;

import com.cogitech.cyberax.server.domain.ListAttente;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link ListAttente} entity.
 */
public interface ListAttenteSearchRepository extends ElasticsearchRepository<ListAttente, Long> {
}
