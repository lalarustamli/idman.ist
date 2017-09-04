namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Category",
                c => new
                    {
                        CategoryId = c.Int(nullable: false, identity: true),
                        CategoryName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.CategoryId);
            
            CreateTable(
                "dbo.Product",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        ProductName = c.String(nullable: false),
                        CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId)
                .ForeignKey("dbo.Category", t => t.CategoryId, cascadeDelete: true)
                .Index(t => t.CategoryId);
            
            CreateTable(
                "dbo.ProductFeature",
                c => new
                    {
                        ProdcutFeatureId = c.Int(nullable: false, identity: true),
                        FeatureName = c.String(nullable: false),
                        FeatureValue = c.String(nullable: false),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProdcutFeatureId)
                .ForeignKey("dbo.Product", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId);
            
            CreateTable(
                "dbo.ProductImage",
                c => new
                    {
                        ImageId = c.Int(nullable: false, identity: true),
                        ImageName = c.String(nullable: false),
                        ContentType = c.String(nullable: false),
                        Content = c.Binary(nullable: false),
                        ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ImageId)
                .ForeignKey("dbo.Product", t => t.ProductId, cascadeDelete: true)
                .Index(t => t.ProductId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ProductImage", "ProductId", "dbo.Product");
            DropForeignKey("dbo.ProductFeature", "ProductId", "dbo.Product");
            DropForeignKey("dbo.Product", "CategoryId", "dbo.Category");
            DropIndex("dbo.ProductImage", new[] { "ProductId" });
            DropIndex("dbo.ProductFeature", new[] { "ProductId" });
            DropIndex("dbo.Product", new[] { "CategoryId" });
            DropTable("dbo.ProductImage");
            DropTable("dbo.ProductFeature");
            DropTable("dbo.Product");
            DropTable("dbo.Category");
        }
    }
}
