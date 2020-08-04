/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2020/8/1 15:31:10                            */
/*==============================================================*/


drop table if exists Specification;

drop table if exists cart;

drop table if exists color;

drop table if exists comment;

drop table if exists material;

drop table if exists product;

drop table if exists series;

drop table if exists user;

drop table if exists wishlist;

/*==============================================================*/
/* Table: Specification                                         */
/*==============================================================*/
create table Specification
(
   SpecificationID      decimal(20) not null,
   SpecificationValue   varchar(100) not null,
   primary key (SpecificationID)
);

/*==============================================================*/
/* Table: cart                                                  */
/*==============================================================*/
create table cart
(
   cartID               decimal(20) not null,
   userID               decimal(20),
   productID            decimal(20),
   count                int(10),
   primary key (cartID)
);

/*==============================================================*/
/* Table: color                                                 */
/*==============================================================*/
create table color
(
   colorID              decimal(20) not null,
   colorName            varchar(20) not null,
   colorValue           varchar(7) not null,
   primary key (colorID)
);

/*==============================================================*/
/* Table: comment                                               */
/*==============================================================*/
create table comment
(
   commentID            decimal(20) not null,
   userID               decimal(20),
   commentContent       varchar(255) not null,
   commentTime          varchar(30) not null,
   primary key (commentID)
);

/*==============================================================*/
/* Table: material                                              */
/*==============================================================*/
create table material
(
   materialID           decimal(20) not null,
   materialName         varchar(100) not null,
   maintelInstructions  varchar(255) not null,
   primary key (materialID)
);

/*==============================================================*/
/* Table: product                                               */
/*==============================================================*/
create table product
(
   productID            decimal(20) not null,
   poductname           varchar(30) not null,
   productCode          decimal(20) not null,
   amount               int(10) not null,
   salesNum             int(10) not null,
   discountNum          numeric(3) not null,
   price                double(100,2) not null,
   discountPirce        double(100,2) not null,
   content              varchar(255) not null,
   colorID              decimal(20) not null,
   materialID           decimal(20) not null,
   SpecificationID      decimal(20) not null,
   seriesID             decimal(20) not null,
   commentID            decimal(20) not null,
   primary key (productID)
);

/*==============================================================*/
/* Table: series                                                */
/*==============================================================*/
create table series
(
   seriesID             decimal(20) not null,
   seriesName           varchar(100) not null,
   bandName             varchar(100) not null,
   style                varchar(255) not null,
   primary key (seriesID)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   userID               decimal(20) not null,
   username             varchar(30) not null,
   password             varchar(16) not null,
   telephone            decimal(11) not null,
   email                varchar(100) not null,
   addresses            varchar(255) not null,
   selfIntroduce        varchar(255) not null,
   createtime           varchar(30) not null,
   headPortrait         varchar(255),
   primary key (userID)
);

/*==============================================================*/
/* Table: wishlist                                              */
/*==============================================================*/
create table wishlist
(
   wishID               decimal(20) not null,
   userID               decimal(20),
   productID            decimal(20),
   collectTime          varchar(30) not null,
   primary key (wishID)
);

alter table cart add constraint FK_Reference_7 foreign key (userID)
      references user (userID) on delete restrict on update restrict;

alter table cart add constraint FK_Reference_8 foreign key (productID)
      references product (productID) on delete restrict on update restrict;

alter table comment add constraint FK_Reference_5 foreign key (userID)
      references user (userID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_1 foreign key (colorID)
      references color (colorID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_2 foreign key (SpecificationID)
      references Specification (SpecificationID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_3 foreign key (materialID)
      references material (materialID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_4 foreign key (seriesID)
      references series (seriesID) on delete restrict on update restrict;

alter table product add constraint FK_Reference_6 foreign key (commentID)
      references comment (commentID) on delete restrict on update restrict;

alter table wishlist add constraint FK_Reference_10 foreign key (productID)
      references product (productID) on delete restrict on update restrict;

alter table wishlist add constraint FK_Reference_9 foreign key (userID)
      references user (userID) on delete restrict on update restrict;

