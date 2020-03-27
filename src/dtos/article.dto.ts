import { ApiProperty } from "@nestjs/swagger";

export class ArticleDto {
  @ApiProperty({
    description: "分类 ID",
    example: 1
  })
  categoryId: number;

  @ApiProperty({
    description: "标题",
    example: "截至3月26日24时新型冠状病毒肺炎疫情最新情况"
  })
  title: string;

  @ApiProperty({
    description: "副标题",
    example: "截至3月26日24时新型冠状病毒肺炎疫情最新情况"
  })
  subtitle: string;

  @ApiProperty({
    description: "描述",
    example:
      "3月12日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例8例，新增死亡病例7例（湖北6例，山东1例），新增疑似病例33例。"
  })
  description: string;

  @ApiProperty({
    description: "内容",
    example:
      "3月12日0—24时，31个省（自治区、直辖市）和新疆生产建设兵团报告新增确诊病例8例，新增死亡病例7例（湖北6例，山东1例），新增疑似病例33例。"
  })
  content: string;

  @ApiProperty({
    description: "封面图片 ID",
    example: 1
  })
  pictureId: number;

  @ApiProperty({
    description: "链接",
    example: "https://www.baidu.com/"
  })
  link: string;

  @ApiProperty({
    description: "状态",
    example: 1
  })
  status: number;
}
