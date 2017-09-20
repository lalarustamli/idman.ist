namespace IdmanistData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReklamImage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Reklam", "reklamImage", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Reklam", "reklamImage");
        }
    }
}
