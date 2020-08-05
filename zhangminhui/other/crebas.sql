/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2020/8/5 17:19:53                            */
/*==============================================================*/


drop table if exists cart;

drop table if exists color;

drop table if exists material;

drop table if exists product;

drop table if exists series;

drop table if exists sort;

drop table if exists specification;

drop table if exists usercomment;

drop table if exists users;

drop table if exists wishlist;

/*==============================================================*/
/* Table: cart                                                  */
/*==============================================================*/
create table cart
(
   cartID               numeric(20) not null,
   userID               numeric(20),
   productID            numeric(20),
   count                int(10),
   primary key (cartID)
);

/*==============================================================*/
/* Table: color                                                 */
/*==============================================================*/
create table color
(
   colorID              numeric(20) not null,
   colorName            varchar(20) not null,
   colorValue           varchar(7) not null,
   primary key (colorID)
);

/*==============================================================*/
/* Table: material                                              */
/*==============================================================*/
create table material
(
   materialID           numeric(20) not null,
   materialName         varchar(100) not null,
   maintelInstructions  varchar(255) not null,
   primary key (materialID)
);

/*==============================================================*/
/* Table: product                                               */
/*==============================================================*/
create table product
(
   productID            numeric(20) not null,
   poductname           varchar(30),
   productCode          numeric(20),
   amount               numeric(10),
   salesNum             numeric(10),
   discountNum          numeric(3),
   price                double(100,2),
   discountPirce        double(100,2),
   content              varchar(255),
   colorID              numeric(20),
   materialID           numeric(20),
   SpecificationID      numeric(20),
   seriesID             numeric(20),
   sortID               numeric(20),
   imgurl               varchar(255),
   isNewProduct         numeric(1),
   isDiscount           numeric(1),
   primary key (productID)
);

/*==============================================================*/
/* Table: series                                                */
/*==============================================================*/
create table series
(
   seriesID             numeric(20) not null,
   seriesName           varchar(100) not null,
   bandName             varchar(100) not null,
   style                varchar(255) not null,
   primary key (seriesID)
);

/*==============================================================*/
/* Table: sort                                                  */
/*==============================================================*/
create table sort
(
   sortID               numeric(20) not null,
   sortName             varchar(20) not null,
   fitnum               varchar(255),
   shape                varchar(10),
   primary key (sortID)
);

/*==============================================================*/
/* Table: specification                                         */
/*==============================================================*/
create table specification
(
   specificationID      numeric(20) not null,
   specificationValue   varchar(100) not null,
   primary key (specificationID)
);

/*==============================================================*/
/* Table: usercomment                                           */
/*==============================================================*/
create table usercomment
(
   commentID            numeric(20) not null,
   userID               numeric(20),
   productID            numeric(20),
   commentContent       varchar(255) not null,
   commentTime          varchar(30) not null,
   primary key (commentID)
);

/*==============================================================*/
/* Table: users                                                 */
/*==============================================================*/
create table users
(
   userID               numeric(20) not null,
   username             varchar(30) not null,
   password             varchar(100) not null,
   telephone            numeric(11) not null,
   email                varchar(100) not null,
   addresses            varchar(255),
   selfIntroduce        varchar(255),
   createtime           varchar(255),
   headPortrait         varchar(255),
   authority            numeric(1),
   Column_11            char(10),
   primary key (userID)
);

/*==============================================================*/
/* Table: wishlist                                              */
/*==============================================================*/
create table wishlist
(
   wishID               numeric(20) not null,
   userID               numeric(20),
   productID            numeric(20),
   collectTime          varchar(30) not null,
   primary key (wishID)
);

alter table cart add constraint FK_Reference_7 foreign key (userID)
      references users (userID) on delete restrict on update restrict;

alter table cart add constraint FK_Reference_8 foreign key (productID)
      references product (productID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_1 foreign key (colorID)
      references color (colorID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_11 foreign key (sortID)
      references sort (sortID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_2 foreign key (SpecificationID)
      references specification (specificationID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_3 foreign key (materialID)
      references material (materialID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_4 foreign key (seriesID)
      references series (seriesID) on delete restrict on update restrict;

alter table usercomment add constraint FK_Reference_12 foreign key (productID)
      references product (productID) on delete restrict on update restrict;

alter table usercomment add constraint FK_Reference_5 foreign key (userID)
      references users (userID) on delete restrict on update restrict;

alter table wishlist add constraint FK_Reference_10 foreign key (productID)
      references product (productID) on delete restrict on update restrict;

alter table wishlist add constraint FK_Reference_9 foreign key (userID)
      references users (userID) on delete restrict on update restrict;

