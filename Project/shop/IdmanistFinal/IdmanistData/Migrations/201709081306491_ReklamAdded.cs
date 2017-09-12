namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReklamAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Reklam",
                c => new
                    {
                        reklamId = c.Int(nullable: false, identity: true),
                        reklamAd = c.String(),
                        reklamLocation = c.String(),
                    })
                .PrimaryKey(t => t.reklamId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Reklam");
        }
    }
}
