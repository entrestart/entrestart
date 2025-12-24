-- Insert categories
INSERT INTO "categories" ("id", "name", "slug", "description", "icon", "color", "serviceCount") VALUES
(uuid_generate_v4(), 'Tech & IT', 'tech-it', 'Services de développement et IT', 'monitor', 'bg-indigo-100', 645),
(uuid_generate_v4(), 'Design & Créatif', 'design-creatif', 'Services de design graphique et création', 'palette', 'bg-pink-100', 523),
(uuid_generate_v4(), 'Marketing & Ventes', 'marketing-ventes', 'Services de marketing digital et commercial', 'trending-up', 'bg-green-100', 412),
(uuid_generate_v4(), 'Vidéo & Animation', 'video-animation', 'Production vidéo et animation', 'video', 'bg-orange-100', 289),
(uuid_generate_v4(), 'Rédaction & Traduction', 'redaction-traduction', 'Services de rédaction et traduction', 'pen-tool', 'bg-blue-100', 367),
(uuid_generate_v4(), 'Audio & Musique', 'audio-musique', 'Production audio et musicale', 'music', 'bg-purple-100', 178),
(uuid_generate_v4(), 'Business & Conseil', 'business-conseil', 'Consulting et conseil en affaires', 'briefcase', 'bg-red-100', 234),
(uuid_generate_v4(), 'Autres Services', 'autres-services', 'Autres services professionnels', 'layers', 'bg-teal-100', 456)
ON CONFLICT DO NOTHING;

-- Insert sample entrepreneurs
INSERT INTO "users" ("id", "email", "name", "avatar", "bio", "role") VALUES
(uuid_generate_v4(), 'thomas.dupont@example.com', 'Thomas Dupont', '/placeholder-user.jpg', 'Développeur Full-Stack avec 8 ans d''expérience', 'ENTREPRENEUR'),
(uuid_generate_v4(), 'sophie.martin@example.com', 'Sophie Martin', '/placeholder-user.jpg', 'Designer Graphique passionnée par l''identité visuelle', 'ENTREPRENEUR'),
(uuid_generate_v4(), 'marie.laurent@example.com', 'Marie Laurent', '/placeholder-user.jpg', 'Experte Marketing Digital et réseaux sociaux', 'ENTREPRENEUR'),
(uuid_generate_v4(), 'lucas.bernard@example.com', 'Lucas Bernard', '/placeholder-user.jpg', 'Vidéaste Professionnel spécialisé en montage', 'ENTREPRENEUR'),
(uuid_generate_v4(), 'julie.rousseau@example.com', 'Julie Rousseau', '/placeholder-user.jpg', 'Consultante en stratégie d''entreprise', 'ENTREPRENEUR')
ON CONFLICT DO NOTHING;

-- Insert sample services (using subqueries to get the actual UUIDs)
INSERT INTO "services" ("id", "title", "description", "shortDescription", "image", "price", "duration", "rating", "reviewCount", "status", "featured", "userId", "categoryId") 
SELECT 
    uuid_generate_v4(),
    'Je vais créer un site web moderne et responsive pour votre entreprise',
    'Création complète d''un site web professionnel avec design moderne, responsive et optimisé SEO. Inclut jusqu''à 5 pages, formulaire de contact et intégration CMS.',
    'Site web moderne et responsive',
    '/modern-web-development-laptop-code.jpg',
    499,
    7,
    4.9,
    127,
    'PUBLISHED',
    true,
    u.id,
    c.id
FROM "users" u, "categories" c
WHERE u.email = 'thomas.dupont@example.com' AND c.slug = 'tech-it'
LIMIT 1;

INSERT INTO "services" ("id", "title", "description", "shortDescription", "image", "price", "duration", "rating", "reviewCount", "status", "featured", "userId", "categoryId")
SELECT 
    uuid_generate_v4(),
    'Je vais concevoir un logo unique et une identité visuelle complète',
    'Création d''un logo professionnel et d''une charte graphique complète pour votre entreprise. Plusieurs propositions, révisions illimitées jusqu''à satisfaction.',
    'Logo unique et identité visuelle',
    '/modern-logo-design-bright-green-yellow.jpg',
    299,
    5,
    5.0,
    89,
    'PUBLISHED',
    true,
    u.id,
    c.id
FROM "users" u, "categories" c
WHERE u.email = 'sophie.martin@example.com' AND c.slug = 'design-creatif'
LIMIT 1;

INSERT INTO "services" ("id", "title", "description", "shortDescription", "image", "price", "duration", "rating", "reviewCount", "status", "featured", "userId", "categoryId")
SELECT 
    uuid_generate_v4(),
    'Je vais gérer vos réseaux sociaux et augmenter votre visibilité',
    'Gestion complète de vos réseaux sociaux avec création de contenu, planification, engagement et reporting mensuel. Stratégie personnalisée selon vos objectifs.',
    'Gestion réseaux sociaux',
    '/analytics-dashboard-marketing-charts.jpg',
    799,
    30,
    4.8,
    156,
    'PUBLISHED',
    true,
    u.id,
    c.id
FROM "users" u, "categories" c
WHERE u.email = 'marie.laurent@example.com' AND c.slug = 'marketing-ventes'
LIMIT 1;

INSERT INTO "services" ("id", "title", "description", "shortDescription", "image", "price", "duration", "rating", "reviewCount", "status", "featured", "userId", "categoryId")
SELECT 
    uuid_generate_v4(),
    'Je vais monter et éditer vos vidéos de manière professionnelle',
    'Montage vidéo professionnel avec effets, transitions, étalonnage couleur et sound design. Livraison dans tous les formats pour réseaux sociaux et web.',
    'Montage vidéo professionnel',
    '/video-editing-timeline-professional.jpg',
    399,
    10,
    4.9,
    94,
    'PUBLISHED',
    true,
    u.id,
    c.id
FROM "users" u, "categories" c
WHERE u.email = 'lucas.bernard@example.com' AND c.slug = 'video-animation'
LIMIT 1;
