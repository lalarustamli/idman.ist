namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WishAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Wishes",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        wished = c.Boolean(nullable: false),
                        product_id = c.Int(nullable: false),
                        customer_id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.id)
                .ForeignKey("dbo.Customer", t => t.customer_id, cascadeDelete: true)
                .ForeignKey("dbo.Product", t => t.product_id, cascadeDelete: true)
                .Index(t => t.product_id)
                .Index(t => t.customer_id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Wishes", "product_id", "dbo.Product");
            DropForeignKey("dbo.Wishes", "customer_id", "dbo.Customer");
            DropIndex("dbo.Wishes", new[] { "customer_id" });
            DropIndex("dbo.Wishes", new[] { "product_id" });
            DropTable("dbo.Wishes");
        }
    }
}
