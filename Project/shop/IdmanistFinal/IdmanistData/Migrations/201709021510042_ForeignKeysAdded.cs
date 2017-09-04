namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ForeignKeysAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Product", "ProductBrandId", c => c.Int(nullable: true));
            CreateIndex("dbo.Product", "ProductBrandId");
            AddForeignKey("dbo.Product", "ProductBrandId", "dbo.ProductBrand", "ProductBrandId", cascadeDelete: true);
        }
        
        //public override void Down()
        //{
        //    DropForeignKey("dbo.Product", "ProductBrandId", "dbo.ProductBrand");
        //    DropIndex("dbo.Product", new[] { "ProductBrandId" });
        //    DropColumn("dbo.Product", "ProductBrandId");
        //}
    }
}
