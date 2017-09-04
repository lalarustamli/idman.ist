namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EFMig : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Product", "ProductInfo", c => c.String());
            DropColumn("dbo.Product", "Productİnfo");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Product", "Productİnfo", c => c.String());
            DropColumn("dbo.Product", "ProductInfo");
        }
    }
}
