package com.spring.web.order.payload;

import java.util.List;

public class ServiceDTO {
    private Long id;

    private String category;

    private String serviceName;

    private List<PackageDTO> items;

    private String createdAt;

    private String updatedAt;
}
