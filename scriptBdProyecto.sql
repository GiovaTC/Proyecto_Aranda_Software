USE [prueba]
GO
/****** Object:  User [giovanny]    Script Date: 7/11/2022 2:34:57 p. m. ******/
CREATE USER [giovanny] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[catalogo]    Script Date: 7/11/2022 2:34:57 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[catalogo](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nchar](50) NOT NULL,
	[descripcion] [nchar](50) NOT NULL,
	[categoria] [nchar](10) NOT NULL,
	[imagenProducto] [varbinary](max) NULL,
 CONSTRAINT [PK_catalogo] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[catalogo] ON 

INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1, N'Odontologia Integral                              ', N'Consultorio                                       ', N'Salud     ', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (2, N'BioMedica                                         ', N'Consultorio                                       ', N'Salud     ', 0x)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (3, N'Consultorios Medicos                              ', N'Consultorios                                      ', N'Salud     ', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (4, N'Servicios Contables                               ', N'Declaraciones y Rentas                            ', N'Contaduria', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1013, N'reloj Inteligente                                 ', N'Reloj marca Swatch                                ', N'Accesorios', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1014, N'Gift Decire                                       ', N'Tienda en Linea                                   ', N'Eventos   ', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1015, N'Todo Bonito                                       ', N'Tienda de Ropa                                    ', N'Comercio  ', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1016, N'Lego dental                                       ', N'Consultorio Odontologico                          ', N'Salud     ', NULL)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1017, N'Barber                                            ', N'Tatuaje y Barberia                                ', N'Bienestar ', 0x)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1018, N'Estetica Alice                                    ', N'Centro de Estetica                                ', N'Bienestar ', 0x)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1019, N'Atlasolar                                         ', N'Calentadores Solares                              ', N'Servicios ', 0x)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1020, N'BioNatura                                         ', N'Consultorio                                       ', N'Salud     ', 0x)
INSERT [dbo].[catalogo] ([id], [nombre], [descripcion], [categoria], [imagenProducto]) VALUES (1022, N'BioMedica                                         ', N'Consultorio                                       ', N'Salud     ', 0x)
SET IDENTITY_INSERT [dbo].[catalogo] OFF
GO
