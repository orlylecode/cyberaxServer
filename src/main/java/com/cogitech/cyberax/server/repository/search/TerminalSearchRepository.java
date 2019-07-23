package com.cogitech.cyberax.server.repository.search;

import com.cogitech.cyberax.server.domain.Terminal;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Terminal} entity.
 */
public interface TerminalSearchRepository extends ElasticsearchRepository<Terminal, Long> {
}
