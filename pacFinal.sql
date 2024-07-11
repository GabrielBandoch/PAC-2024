-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: pac
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id_post` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `synopsis` text NOT NULL,
  `content` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_post`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (7,'Introdução a NodeJS','Software','Node.js é uma plataforma de desenvolvimento de software que utiliza JavaScript no servidor, permitindo operações eficientes e escaláveis através de seu modelo de I/O não bloqueante. Criado para lidar com aplicações em tempo real, Node.js se destaca pela sua capacidade de processar múltiplas conexões simultâneas de forma eficiente, facilitando desde simples APIs até complexos sistemas distribuídos, apoiado por uma vasta biblioteca de módulos acessíveis pelo npm.','Node.js é uma plataforma de desenvolvimento de software de código aberto conhecida por sua capacidade de executar JavaScript no servidor. Criado por Ryan Dahl em 2009, Node.js revolucionou a forma como desenvolvemos aplicações web, permitindo que o JavaScript, tradicionalmente usado apenas no lado do cliente, também fosse utilizado no servidor.\r\n\r\nUma das principais vantagens do Node.js é seu modelo de I/O não bloqueante e orientado a eventos. Isso significa que ele pode lidar com um grande número de conexões simultâneas de forma eficiente, ideal para aplicações em tempo real como chats, jogos online e streaming de dados. Ao contrário de plataformas tradicionais que criam threads separados para cada conexão, Node.js usa um único thread de execução, delegando operações I/O assíncronas para o sistema operacional e liberando o thread para lidar com mais solicitações.\r\n\r\nAlém de ser eficiente em termos de desempenho, Node.js é amplamente adotado pela sua vasta gama de módulos disponíveis através do npm (Node Package Manager), um dos maiores repositórios de software do mundo. Isso permite aos desenvolvedores acessar e integrar facilmente bibliotecas e frameworks para diferentes necessidades, desde construção de APIs até aplicações de servidor completo.\r\n\r\nNode.js também é flexível e escalável, permitindo que seja usado em diversos tipos de projetos, desde pequenas aplicações até grandes sistemas distribuídos. Com sua arquitetura modular e suporte robusto da comunidade, Node.js continua a ser uma escolha popular para desenvolvedores que buscam eficiência, velocidade e modernidade na criação de aplicações web e mobile.','2024-07-10 23:55:27'),(8,'Estrutura de Redes','Software','A estrutura de redes abrange a organização e interconexão de dispositivos para facilitar a comunicação, essencial para redes locais, abrangentes e virtuais, usando protocolos e topologias específicas para garantir eficiência e segurança na troca de informações.','A estrutura de redes refere-se à organização e interconexão de dispositivos de comunicação, como computadores e dispositivos móveis, através de meios físicos e lógicos para facilitar a troca de informações. Redes podem ser locais (LANs), abrangentes (WANs) ou virtuais (VPNs), cada uma com suas próprias topologias e protocolos, permitindo comunicação eficiente e segura entre usuários e sistemas.\r\nA estrutura de redes é fundamental para a comunicação eficiente e segura entre dispositivos e sistemas em todo o mundo. Ela envolve a organização física e lógica dos componentes de uma rede, incluindo hardware (como roteadores, switches e cabos) e software (protocolos de comunicação e sistemas operacionais de rede).\r\n\r\nComponentes Físicos: Os dispositivos físicos em uma rede formam sua infraestrutura básica. Isso inclui cabos de rede, que podem ser de cobre ou fibra óptica, e dispositivos de rede como roteadores e switches. Roteadores são responsáveis por encaminhar pacotes de dados entre diferentes redes, enquanto switches conectam dispositivos dentro da mesma rede local (LAN), permitindo a comunicação direta entre eles.\r\n\r\nComponentes Lógicos: Além da infraestrutura física, redes também dependem de componentes lógicos para operar de maneira eficiente. Isso inclui protocolos de rede, como TCP/IP, que definem regras para o envio e recebimento de dados na rede. Protocolos de roteamento, como OSPF e BGP, são usados para determinar os caminhos mais eficientes para o tráfego de dados em redes maiores (WANs).\r\n\r\nTopologias de Rede: A topologia de uma rede descreve como os dispositivos estão fisicamente ou logicamente conectados entre si. As topologias comuns incluem estrela, onde todos os dispositivos são conectados a um hub central; anel, onde cada dispositivo está conectado aos dois dispositivos vizinhos formando um circuito fechado; e malha, onde cada dispositivo está conectado diretamente a todos os outros dispositivos, criando múltiplos caminhos para o tráfego de dados.\r\n\r\nSegurança e Gerenciamento: A segurança é essencial em redes para proteger dados sensíveis e garantir que apenas usuários autorizados tenham acesso aos recursos da rede. Isso envolve o uso de firewalls, criptografia e políticas de acesso para prevenir ataques cibernéticos e vazamentos de informações. Além disso, o gerenciamento de rede inclui monitoramento de desempenho, manutenção preventiva e resolução de problemas para garantir que a rede opere de maneira confiável e eficiente.','2024-07-10 23:57:10'),(9,'Banco de dados','Software','Um banco de dados é um sistema que armazena e gerencia informações de forma organizada e segura, facilitando o acesso, a atualização e a análise de dados. Essencial para diversas aplicações, ele suporta desde operações empresariais até plataformas digitais, garantindo a integridade e a eficiência na gestão de dados.','Um banco de dados é um sistema organizado para armazenar e gerenciar informações de forma estruturada, permitindo o acesso rápido, a atualização e a análise dos dados. Essencialmente, ele atua como um repositório centralizado que suporta diversas aplicações ao armazenar dados de forma persistente e segura.\r\n\r\nComponentes Fundamentais: Um banco de dados típico é composto por tabelas, que organizam os dados em linhas (registros) e colunas (campos). Cada tabela é projetada com um esquema que define os tipos de dados que podem ser armazenados e as relações entre as entidades. Além das tabelas, outros componentes como índices, que melhoram a velocidade de consulta, e procedimentos armazenados, que executam operações específicas no banco de dados, são comuns em sistemas de gerenciamento de banco de dados (SGBDs).\r\n\r\nModelos de Banco de Dados: Existem vários modelos de banco de dados, cada um projetado para atender a diferentes requisitos de armazenamento e manipulação de dados. Modelos relacionais, como o SQL (Structured Query Language), são amplamente utilizados, organizando dados em tabelas inter-relacionadas com chaves primárias e estrangeiras. Modelos NoSQL, como documentos, grafos e chave-valor, são adaptados para necessidades específicas, como flexibilidade de esquema e escalabilidade horizontal em ambientes distribuídos.\r\n\r\nFuncionalidades Avançadas: Além de armazenar dados, bancos de dados modernos oferecem funcionalidades avançadas, como transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) para garantir a integridade dos dados em operações concorrentes, replicação para alta disponibilidade e segurança robusta, incluindo controle de acesso e auditoria de atividades.\r\n\r\nAplicações e Importância: Os bancos de dados são fundamentais para uma variedade de aplicações, desde sistemas de gerenciamento empresarial até aplicações web e móveis. Eles permitem que organizações armazenem grandes volumes de dados de forma eficiente, analisem tendências, tomem decisões baseadas em dados e ofereçam serviços personalizados aos usuários.\r\n\r\nEm suma, os bancos de dados desempenham um papel crucial na economia digital moderna, facilitando o armazenamento confiável e acessível de dados e sustentando a infraestrutura para inovação e desenvolvimento tecnológico em diversas áreas.','2024-07-10 23:58:42'),(10,'C#','Linguagem','C# é uma linguagem moderna da Microsoft, usada para desenvolver software diverso, de desktop a aplicações web e jogos, com suporte eficiente da plataforma .NET.','C# é uma linguagem de programação moderna e orientada a objetos desenvolvida pela Microsoft. Lançada em 2000, ela combina a simplicidade e poder do C++ com a familiaridade do Visual Basic. C# é amplamente utilizada para desenvolver uma variedade de aplicações, desde software de desktop até aplicações web e móveis. Com um forte suporte da comunidade e integração com a plataforma .NET, C# oferece recursos avançados como tipos de dados seguros, gerenciamento automático de memória e suporte para programação assíncrona, tornando-a uma escolha popular entre desenvolvedores para projetos robustos e escaláveis.\r\nC# é altamente valorizada na indústria de desenvolvimento de software por sua versatilidade e eficiência. Utilizando a estrutura do .NET, a linguagem se destaca em várias áreas:\r\n\r\nDesenvolvimento de Aplicações Windows: C# é frequentemente usado para criar software para plataformas Windows, incluindo aplicativos de desktop e sistemas integrados. Sua integração profunda com a biblioteca de classes do .NET Framework permite desenvolver interfaces de usuário ricas e funcionais com facilidade.\r\n\r\nDesenvolvimento Web: Com o ASP.NET, uma estrutura poderosa para desenvolvimento web, C# possibilita a criação de aplicativos web escaláveis e seguros. Ele suporta arquiteturas modernas como MVC (Model-View-Controller) e Web API, permitindo a construção de APIs RESTful e aplicações web dinâmicas.\r\n\r\nDesenvolvimento Mobile: Embora mais comumente associado ao desenvolvimento nativo de Windows Phone (agora substituído pelo Xamarin), C# também é usado no desenvolvimento multiplataforma de aplicativos móveis através do Xamarin, permitindo que desenvolvedores usem uma única base de código para Android, iOS e Windows.\r\n\r\nJogos e Realidade Virtual: Com o Unity, uma das principais plataformas de desenvolvimento de jogos e realidade virtual, C# é a linguagem de script predominante. Isso permite aos desenvolvedores criar experiências interativas e imersivas em uma ampla gama de dispositivos e plataformas.\r\n\r\nIntegração de Sistemas e Backend: C# é amplamente utilizado para desenvolver sistemas de backend robustos e escaláveis, incluindo serviços web, processamento de dados e integração de sistemas empresariais. Sua forte tipagem estática e suporte a programação assíncrona facilitam o desenvolvimento de aplicações que lidam eficientemente com grandes volumes de dados e tráfego simultâneo.','2024-07-11 00:01:53');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `idade` int(11) NOT NULL,
  `pass` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'gabriel','teste@gmail.com',12,123),(5,'Felipe','testa@gmail.com',20,321);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-10 21:09:39
